import { Component, Input } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal',
  imports: [FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  @Input() isModalOpen: boolean = false;
  @Input() closeModal: () => void = () => {};
  @Input() submit: (project: any) => void = () => {};

  
  newProject = {
    name: '',
    description: '',
    dueDate: '',
    priority: 'medium',
    status: 'active'
  };

  constructor(public theme: ThemeService) {}

  openModal() {
    this.isModalOpen = true;
  }



  resetForm() {
    this.newProject = {
      name: '',
      description: '',
      dueDate: '',
      priority: 'medium',
      status: 'active'
    };
  }

  onSubmit() {
    if (this.newProject.name && this.newProject.description) {
      console.log('New Project:', this.newProject);
      this.closeModal();
    }
  }
}
