import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard-layout',
  imports: [RouterOutlet,HeaderComponent,FooterComponent,SidebarComponent],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css'
})
export class DashboardLayoutComponent {
 isSidebarCollapsed = false;

   onToggleSidebar() {
      console.log('Layout received event!');
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
     console.log('Layout: collapsed =', this.isSidebarCollapsed);
  }
}
