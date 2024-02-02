import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterModule,
    CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  providers: [Router]
})
export class MainComponent implements OnInit {
  ngOnInit(): void {

  }
}

