import { Component } from '@angular/core';
import { EachHeaderComponent } from '../../shared/each-header/each-header.component';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teams',
  imports: [EachHeaderComponent,CommonModule],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css'
})
export class TeamsComponent {

  constructor(public theme:ThemeService){}
}
