import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';
import { EachHeaderComponent } from '../../shared/each-header/each-header.component';

@Component({
  selector: 'app-settings',
  imports: [CommonModule,EachHeaderComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {

  constructor(public theme:ThemeService) { }
}
