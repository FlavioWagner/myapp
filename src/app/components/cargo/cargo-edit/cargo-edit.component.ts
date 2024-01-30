import { Component, OnInit } from '@angular/core';
import { CargoModel, ICargoModel } from '../cargo.model';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CargoService } from '../cargo.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cargo-edit',
  standalone: true,
  imports: [RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    ConfirmDialogModule,
    InputTextModule],
  templateUrl: './cargo-edit.component.html',
  styleUrl: './cargo-edit.component.scss',
  providers: [ConfirmationService, CargoService]
})
export class CargoEditComponent implements OnInit {

  model?: ICargoModel | null | undefined;
  cargoForm!: FormGroup;
  isInsert: boolean = false;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private cargoService: CargoService) { }

  async ngOnInit() {
    this.model = new CargoModel();
    this.cargoForm = this.formBuilder.group({
      id: [this.model.id],
      idkcloakUsrLogado: [this.model.idkcloakUsrLogado],
      sgCargo: [this.model.sgCargo],
      nmCargo: [this.model.nmCargo],
      inAtivo: [this.model.inAtivo],
      inExecutivo: [this.model.inExecutivo],
      dsCompetencia: [this.model.dsCompetencia],
      inExcluido: [this.model.inExcluido],
      nuOrdem: [this.model.nuOrdem],
      tipoCargoId: [this.model.tipoCargoId],
      tipoCargoNm: [this.model.tipoCargoNm],
      conselhoId: [this.model.conselhoId],
      sgUf: [this.model.sgUf],
      cargoEstruturaOrganizacionals: [this.model.cargoEstruturaOrganizacionals],
      justificativaAtivacao: [this.model.justificativaAtivacao]
    });

    const id = this.route.snapshot.params['id'];
    this.isInsert = id == null;

    await this.LoadData(id);

    if (!this.model) {
      this.messageService.add({ severity: 'error', summary: 'Acesso Negado', detail: 'Registro não encontrado!' });
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

  onSubmit() {
    console.log(this.model)
  }

  cancelar(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Existem informações que não foram salvas. Caso confirme, as informações serão descartadas. Confirma?',
      header: 'Confirmação',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-danger p-button-text',
      rejectButtonStyleClass: 'p-button-text p-button-text',
      acceptIcon: 'none',
      rejectIcon: 'none',

      accept: () => {
        this.messageService.add({ severity: 'warning', summary: 'Atenção', detail: 'Ação cacelada!' });
        this.previousState();
      }
    });
  }


}
