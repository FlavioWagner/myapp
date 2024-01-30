
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ConfirmationService, MessageService, SelectItem } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { CargoService } from './cargo.service';
import { CargoModel, ICargoModel } from './cargo.model';
import { DropdownModule } from 'primeng/dropdown';

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
    InputTextModule,
    DropdownModule,],
  templateUrl: './cargo.component.html',
  styleUrl: './cargo.component.scss',
  providers: [CargoService, ConfirmationService]
})
export class CargoComponent implements OnInit {

  itens: ICargoModel[] = [];
  listSimNao:SelectItem[] = [];
  listSimNao2:SelectItem[] = [];  
  executivo!:SelectItem;
  status!:SelectItem;


  cargoForm!: FormGroup;
  ngbPaginationPage = 1;
  page!: number;
  predicate!: string;
  ascending!: boolean;
  totalItems = 0;
  itemsPerPage = 10;

  constructor(private formBuilder: FormBuilder,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private cargoService: CargoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listSimNao = [{value:null,label:'Selecione'},{value:'S', label:'Sim'},{value:'N', label:'Não'}];
    this.listSimNao2 = [{value:null,label:'Selecione'},{value:'S', label:'Sim'},{value:'N', label:'Não'}];

    const cargo: ICargoModel = new CargoModel();

    // Create the FormGroup using FormBuilder
    this.cargoForm = this.formBuilder.group({
      id:                            [cargo.id],
      idkcloakUsrLogado:             [cargo.idkcloakUsrLogado],
      sgCargo:                       [cargo.sgCargo],
      nmCargo:                       [cargo.nmCargo],
      inAtivo:                       [cargo.inAtivo],
      inExecutivo:                   [cargo.inExecutivo],
      dsCompetencia:                 [cargo.dsCompetencia],
      inExcluido:                    [cargo.inExcluido],
      nuOrdem:                       [cargo.nuOrdem],
      tipoCargoId:                   [cargo.tipoCargoId],
      tipoCargoNm:                   [cargo.tipoCargoNm],
      conselhoId:                    [cargo.conselhoId],
      sgUf:                          [cargo.sgUf],
      cargoEstruturaOrganizacionals: [cargo.cargoEstruturaOrganizacionals],
      justificativaAtivacao:         [cargo.justificativaAtivacao]
    });

    this.carregarDadosGrid();
  }


  carregarDadosGrid() {
    const pageToLoad: number = 1;

    const req = {
      page: pageToLoad - 1,
      size: this.itemsPerPage,
      sort: this.sort(),
      ...this.buildFilters(),
    };

    this.cargoService
      .query()
      .subscribe(
        (res) => {
          this.onSuccess(res.body, res.headers, pageToLoad, false),
        () => this.onError()
        });
  }


  /*
  let dados: ICargoModel = this.cargoForm.value;  
  if (dados.id == null) {
    this.cargoService.query().subscribe(
      (response) => {
        this.itens = response.body || [];
      },
      (error) => {
        console.error('Erro ao carregar dados', error);
      }
    );
  } else {
    this.cargoService.findOne(dados.id).subscribe(
      (response) => {
        this.itens = [];
        if (response.body != null) {
          this.itens.push(response.body);
        }
      },
      (error) => {
        console.error('Erro ao carregar dados', error);
      }
    );
  }
}*/


  onSubmit() {
    let dados: ICargoModel = this.cargoForm.value;
  }

  limpar() {
    this.cargoForm.reset();
  }

  pesquisar() {
    //this.carregarDadosGrid();
    let valor:ICargoModel = this.cargoForm.value;
    alert(valor.inExecutivo)
  }


  async confirmarDelecao(event: Event, item: CargoModel) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: `Deseja remover o registro "${item.nmCargo}"?`,
      header: 'Confirmação',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-danger p-button-text',
      rejectButtonStyleClass: 'p-button-text p-button-text',
      acceptIcon: 'none',
      rejectIcon: 'none',

      accept: () => {
        this.removerItem(item.id);
        this.carregarDadosGrid();
        this.messageService.add({ severity: 'info', summary: 'Confirmação', detail: 'Registro deletado!' });
      }
    });
  }

  removerItem(id?:number){
    console.log('item removido');
  }

  private buildFilters(): any {
    let filter: ICargoModel = this.cargoForm.value;

    const filters: any = {};

    if (filter.id) filters['id.equals'] = filter.id;
    if (filter.nmCargo) filters['nmCargo.contains'] = filter.nmCargo;
    if (filter.sgCargo) filters['sgCargo.contains'] = filter.sgCargo;

    return filters;
  }

  sort(): string[] {
    const result = ['id'];
    return result;
  }


  protected onSuccess(data: ICargoModel[] | null, headers: HttpHeaders, page: number, navigate: boolean): void {

    this.totalItems = Number(headers.get('X-Total-Count'));
    this.page = page;
    
    if (navigate) {
      this.router.navigate(['/cargos'], {
        queryParams: {
          page: this.page,
          size: this.itemsPerPage,
          sort: this.predicate + ',' + (this.ascending ? 'asc' : 'desc'),
        },
      });
    }
    this.itens = data || [];
    this.ngbPaginationPage = this.page;
  }

  protected onError(): void {
    this.ngbPaginationPage = this.page || 1;
  }

}

