import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';
import { EachHeaderComponent } from '../../shared/each-header/each-header.component';

@Component({
  selector: 'app-add-user',
  imports: [CommonModule,EachHeaderComponent],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {

  constructor( public theme:ThemeService){
    
  }
}
