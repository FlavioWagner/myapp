
import { Component, OnInit } from '@angular/core';
import { CargoModel, ICargoModel } from '../cargo.model';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CargoService } from '../cargo.service';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
  selector: 'cargo-view',
  standalone: true,
  imports: [RouterModule,
            HttpClientModule,
            FormsModule,
            ReactiveFormsModule,
            ButtonModule,
            InputTextModule],
  templateUrl: './cargo-view.component.html',
  styleUrl: './cargo-view.component.scss',
  providers: [CargoService]
})
export class CargoViewComponent implements OnInit {

  model?: ICargoModel | null | undefined;
  cargoForm!: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private location: Location,
              private formBuilder: FormBuilder,
              private cargoService: CargoService) { }

  async ngOnInit() {
    this.model = new CargoModel();
    this.cargoForm = this.formBuilder.group({        
                       id:[this.model.id],
              idkcloakUsrLogado:[this.model.idkcloakUsrLogado],
              sgCargo:[this.model.sgCargo],
              nmCargo:[this.model.nmCargo],
              inAtivo:[this.model.inAtivo],
              inExecutivo:[this.model.inExecutivo],
              dsCompetencia:[this.model.dsCompetencia],
              inExcluido:[this.model.inExcluido],
              nuOrdem:[this.model.nuOrdem],
              tipoCargoId:[this.model.tipoCargoId],
              tipoCargoNm:[this.model.tipoCargoNm],
              conselhoId:[this.model.conselhoId],
              sgUf:[this.model.sgUf],
              cargoEstruturaOrganizacionals:[this.model.cargoEstruturaOrganizacionals],
              justificativaAtivacao:[this.model.justificativaAtivacao],
              cargos:[this.model.cargos],});


    Object.values(this.cargoForm.controls).forEach((control: AbstractControl) => {
      control.disable();
    });

    const id = this.route.snapshot.params['id'];       
    await this.LoadData(id);

    if (!this.model) {
      this.previousState();
    }
  }

  async LoadData(id?: number) {
    if (id != null) {
      this.cargoService.findOne(id).subscribe(
        (response) => {
          this.model = response.body;
          this.cargoForm.patchValue(this.model!);
        },
        (error) => {
          this.router.navigate(['/error']);
        }
      );
    }
  }

  previousState(): void {
    const currentLocation: any = this.location;
    if (currentLocation.getState().navigationId > 1) {
      window.history.back();
    } else {
      this.router.navigate(['/']);
    }
  }

  fechar() {
    this.previousState();
  }
}