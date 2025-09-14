import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { sidebarmenu } from '../../model/sidebarmenu.model';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
    @Input() collapsed: boolean = false;
    SIDEBAR_ITEMS: sidebarmenu[] = [
  {
    section: 'Main',
    items: [
      { title: 'Dashboard', icon: 'fas fa-tachometer-alt', route: '/dashboard' },
      { title: 'Projects', icon: 'fas fa-project-diagram', route: '/projects' },
      { title: 'Add User', icon: 'fa-solid fa-user-plus', route: '/add-user' },
      { title: 'show User', icon: 'fa-solid fa-users', route: '/show-users' },
      { title: 'Add Task', icon: 'fas fa-folder-plus', route: '/add-task' },
      { title: 'Tasks', icon: 'fas fa-tasks', route: '/tasks' },
      { title: 'Calendar', icon: 'fas fa-calendar-alt', route: '/calendar' },
      { title: 'Inbox', icon: 'fas fa-envelope', route: '/inbox' }
    ]
  },
  {
    section: 'Collaboration',
    items: [
      { title: 'Teams', icon: 'fas fa-users', route: '/teams' },
      { title: 'Files', icon: 'fas fa-folder-open', route: '/files' },
      { title: 'Reports', icon: 'fas fa-chart-line', route: '/reports', role: ['admin'] },
      { title: 'Notifications', icon: 'fas fa-bell', route: '/notifications' },
      //  { title: 'Activity Feed', icon: 'fas fa-stream', route: '/activity' }
    ]
  },
  {
    section: 'Account',
    items: [
      { title: 'Settings', icon: 'fas fa-cog', route: '/settings' },
      { title: 'Logout', icon: 'fas fa-sign-out-alt', route: '/logout' }
    ]
  }
];
    constructor(public theme:ThemeService){}
    
}
