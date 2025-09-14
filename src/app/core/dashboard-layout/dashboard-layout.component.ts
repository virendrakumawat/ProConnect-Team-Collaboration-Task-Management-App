import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-layout',
  imports: [RouterOutlet,HeaderComponent,FooterComponent,SidebarComponent,CommonModule],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css'
})
export class DashboardLayoutComponent {
 isSidebarCollapsed = false;

 constructor(public theme:ThemeService){}


   onToggleSidebar() {
      console.log('Layout received event!');
      this.isSidebarCollapsed = !this.isSidebarCollapsed;
     console.log('Layout: collapsed =', this.isSidebarCollapsed);
  }
}
