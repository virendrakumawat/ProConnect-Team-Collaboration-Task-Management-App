import { Component } from '@angular/core';
import { EachHeaderComponent } from '../../shared/each-header/each-header.component';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-notifications',
  imports: [EachHeaderComponent,CommonModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent {

  constructor(public theme:ThemeService) { }  
}
