import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-notification-dropdown',
  imports: [CommonModule],
  templateUrl: './notification-dropdown.component.html',
  styleUrl: './notification-dropdown.component.css'
})
export class NotificationDropdownComponent {

  constructor(private eRef: ElementRef){}
   isOpen = false;

  notifications = [
    { icon: 'fas fa-cog', title: 'Settings', message: 'Update Dashboard', color: '#4facfe' },
    { icon: 'fas fa-calendar-alt', title: 'Event Update', message: 'An event date update again', color: '#43e97b' },
    { icon: 'fas fa-user', title: 'Profile', message: 'Update your profile', color: '#ff9a9e' },
    { icon: 'fas fa-exclamation-triangle', title: 'Application Error', message: 'Check your running application', color: '#fbc531' }
  ];

  toggleDropdown() {
    //  event.stopPropagation();
    this.isOpen = !this.isOpen;

  }
}
