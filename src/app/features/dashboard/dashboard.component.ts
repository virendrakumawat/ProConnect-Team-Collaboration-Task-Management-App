import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartType } from 'chart.js';
import { EachHeaderComponent } from '../../shared/each-header/each-header.component';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule,EachHeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
// Line

  constructor(private route:Router, public theme:ThemeService){}




  logout(){
    sessionStorage.clear();
    this.route.navigate(['/sign-in'])
  }
}
