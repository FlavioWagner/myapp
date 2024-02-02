
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { CargoService } from './cargo.service';
import { CargoModel,ICargoModel } from './cargo.model';

@Component({
  selector: 'app-cargo',
  standalone: true,
  imports: [RouterModule,
            HttpClientModule,
            FormsModule,
            ReactiveFormsModule,
            TableModule,
            ButtonModule,
            ConfirmDialogModule, 
            InputTextModule],
  templateUrl: './cargo.component.html',
  styleUrl: './cargo.component.scss',
  providers:[CargoService, ConfirmationService]
})
export class CargoComponent implements OnInit{

  itens: ICargoModel[]=[];
  cargoForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private confirmationService: ConfirmationService,
              private messageService: MessageService,
              private cargoService: CargoService
             ){ }

  ngOnInit(): void {
    const cargo: ICargoModel = new CargoModel();
    

    // Create the FormGroup using FormBuilder
    this.cargoForm = this.formBuilder.group({        
                                                  id:[cargo.id],
                                                  idkcloakUsrLogado:[cargo.idkcloakUsrLogado],
                                                  sgCargo:[cargo.sgCargo],
                                                  nmCargo:[cargo.nmCargo],
                                                  inAtivo:[cargo.inAtivo],
                                                  inExecutivo:[cargo.inExecutivo],
                                                  dsCompetencia:[cargo.dsCompetencia],
                                                  inExcluido:[cargo.inExcluido],
                                                  nuOrdem:[cargo.nuOrdem],
                                                  tipoCargoId:[cargo.tipoCargoId],
                                                  tipoCargoNm:[cargo.tipoCargoNm],
                                                  conselhoId:[cargo.conselhoId],
                                                  sgUf:[cargo.sgUf],
                                                  cargoEstruturaOrganizacionals:[cargo.cargoEstruturaOrganizacionals],
                                                  justificativaAtivacao:[cargo.justificativaAtivacao],
                                                  cargos:[cargo.cargos],
    });
    
    this.carregarDadosGrid();
  }


  carregarDadosGrid(){
    this.cargoService.findAll().subscribe(
      (response) => {
        this.itens = response.body || [];
      },
      (error) => {
        console.error('Erro ao carregar dados', error);
      }
    );
  }


  onSubmit() {
    let dados: ICargoModel = this.cargoForm.value;
  }

  confirmarDelecao(event: Event, id: number) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: `Deseja remover o registro ${id}?`,
      header: 'Confirmação',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-danger p-button-text',
      rejectButtonStyleClass: 'p-button-text p-button-text',
      acceptIcon: 'none',
      rejectIcon: 'none',

      accept: () => {
        this.carregarDadosGrid();
        this.messageService.add({ severity: 'info', summary: 'Confirmação', detail: 'Registro deletado!' });        
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Negado', detail: 'Solicitação negada!' });
      }
    });
  }  

}