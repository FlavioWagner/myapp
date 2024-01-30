import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss',
  providers: []
})
export class ErrorComponent implements OnInit {
  constructor(private messageService:MessageService){}

  ngOnInit(): void {
    this.messageService.add({ severity: 'error', summary: 'Acesso Negado', detail: 'Dados inválidos!' });
  }

}
