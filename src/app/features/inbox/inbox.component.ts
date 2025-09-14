import { Component } from '@angular/core';
import { EachHeaderComponent } from '../../shared/each-header/each-header.component';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-inbox',
  imports: [EachHeaderComponent ,CommonModule],
  templateUrl: './inbox.component.html',
  styleUrl: './inbox.component.css'
})
export class InboxComponent {

  constructor(public theme:ThemeService){}
}
