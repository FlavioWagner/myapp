import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { MenuComponent } from './layouts/sidemenu/menu/menu.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,CommonModule, ToastModule, NavbarComponent,FooterComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[MessageService]
})
export class AppComponent {
  title = 'My-app';
  constructor(private messageService:MessageService){}  
}
