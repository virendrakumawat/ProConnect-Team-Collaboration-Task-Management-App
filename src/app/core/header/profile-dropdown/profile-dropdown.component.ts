import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-profile-dropdown',
  imports: [MatMenuModule, MatIconModule,CommonModule],
  templateUrl: './profile-dropdown.component.html',
  styleUrls: ['./profile-dropdown.component.css'],
  encapsulation: ViewEncapsulation.None 
})
export class ProfileDropdownComponent {

   menuItems = [
    { label: 'Manage Account', icon: 'manage_accounts' ,color: '#71BAFD'  },
    { label: 'Change Password', icon: 'vpn_key' , color: '#FCA1E0' },
    { label: 'Activity Log', icon: 'history', color: '#B39FFF'  },
    { label: 'Logout', icon: 'logout',color: '#FFACAC' }
  ];
}
