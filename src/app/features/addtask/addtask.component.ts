import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { EachHeaderComponent } from '../../shared/each-header/each-header.component';

@Component({
  selector: 'app-addtask',
  imports: [ReactiveFormsModule, CommonModule,EachHeaderComponent],
  templateUrl: './addtask.component.html',
  styleUrl: './addtask.component.css'
})
export class AddtaskComponent {
  taskForm: FormGroup;
  priorities = ['Low', 'Medium', 'High', 'Critical'];
  statuses = ['To Do', 'In Progress', 'Review', 'Done'];
  
  constructor(private fb: FormBuilder, public theme:ThemeService) {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', Validators.required],
      assignee: ['', Validators.required],
      priority: ['Medium', Validators.required],
      status: ['To Do', Validators.required],
      dueDate: ['', Validators.required],
      tags: [''],
      project: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      console.log('Task created:', this.taskForm.value);
      // Handle form submission
    } else {
      console.log('Form is invalid');
    }
  }

  onCancel() {
    this.taskForm.reset();
  }


}
