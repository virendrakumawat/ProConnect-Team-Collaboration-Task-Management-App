import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Output, ViewEncapsulation } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { ProfileDropdownComponent } from './profile-dropdown/profile-dropdown.component';
import { LanguageComponent } from './language/language.component';
import { NotificationDropdownComponent } from './notification-dropdown/notification-dropdown.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {ThemePalette} from '@angular/material/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule ,ProfileDropdownComponent,NotificationDropdownComponent,MatSlideToggleModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
 @Output() toggleSidebar = new EventEmitter<void>();

  
  constructor(public theme:ThemeService){ 

  }

  toggle() {
   console.log('Header: Button clicked'); 
    this.toggleSidebar.emit();
  }
}
