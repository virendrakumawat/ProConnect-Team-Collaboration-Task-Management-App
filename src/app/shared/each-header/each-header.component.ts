import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter} from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-each-header',
  imports: [CommonModule],
  templateUrl: './each-header.component.html',
  styleUrl: './each-header.component.css'
})
export class EachHeaderComponent {

  @Input() Heading!:string;
  @Input() subHeading!:string;
  @Input() iconClass!:string;
  @Input() inputboxShow!:boolean;
  @Output() newProjectClick = new EventEmitter<void>();

  constructor(public theme:ThemeService) { }

  onNewProjectClick() {
    this.newProjectClick.emit();
  }
}
