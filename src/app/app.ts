import { Component, signal, inject } from '@angular/core';
import { RequestCard } from './components/request-card/request-card';
import { CommonModule } from '@angular/common';
import { MaintenanceRequest } from './services/maintenance-request';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { CreateRequestForm } from './components/create-request-form/create-request-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, RouterLinkWithHref],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('maintenance-frontend');

}
