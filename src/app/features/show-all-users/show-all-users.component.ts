import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EachHeaderComponent } from '../../shared/each-header/each-header.component';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-show-all-users',
  imports: [CommonModule,EachHeaderComponent],
  templateUrl: './show-all-users.component.html',
  styleUrl: './show-all-users.component.css'
})
export class ShowAllUsersComponent {

  constructor(public theme:ThemeService){}

}
