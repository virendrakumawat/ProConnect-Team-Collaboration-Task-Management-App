import { Component } from '@angular/core';
import { EachHeaderComponent } from '../../shared/each-header/each-header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../../services/theme.service';
import { ModalComponent } from '../../shared/modal/modal.component';

@Component({
  selector: 'app-projects',
  imports: [EachHeaderComponent, CommonModule, FormsModule,ModalComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }
  closeModal() {
    this.isModalOpen = false;
  }
  handleNewProject(project: any) {
    console.log('New Project from ProjectsComponent:', project);
    this.closeModal();
  }
  constructor(public theme: ThemeService) {}
}
