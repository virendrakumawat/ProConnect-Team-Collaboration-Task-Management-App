import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 @Output() toggleSidebar = new EventEmitter<void>();
  isDropdownOpen: boolean = false;
  country:any=[
  { code: 'en', name: 'English', flag: '/assest/flag/uk.png' },
  { code: 'es', name: 'Español', flag: '/assest/flag/de.png' },
  { code: 'fr', name: 'Français', flag: '/assest/flag/fr.png' }
  ]

  toggle() {
   console.log('Header: Button clicked'); 
    this.toggleSidebar.emit();
  }
  selectedLanguage = this.country[0];

  toggleDropdown() {
    console.log("clic")
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectLanguage(lang: any) {
    this.selectedLanguage = lang;
    this.isDropdownOpen = false; // close after selecting
  }
  
}
