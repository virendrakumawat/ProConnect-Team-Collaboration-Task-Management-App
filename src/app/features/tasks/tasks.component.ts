import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { EachHeaderComponent } from '../../shared/each-header/each-header.component';

interface Task {
  id: number;
  title: string;
  description: string;
  assignee: string;
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
  status: 'To Do' | 'In Progress' | 'Review' | 'Completed';
  dueDate: string;
  project: string;
  progress: number;
}

@Component({
  selector: 'app-tasks',
  imports: [CommonModule,EachHeaderComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks: Task[] = [
    {
      id: 1,
      title: 'Design System Implementation',
      description: 'Create and implement a comprehensive design system for the application',
      assignee: 'Sarah Johnson',
      priority: 'High',
      status: 'In Progress',
      dueDate: '2024-01-15',
      project: 'ProConnect UI',
      progress: 75
    },
    {
      id: 2,
      title: 'API Integration',
      description: 'Integrate REST APIs for user management and task operations',
      assignee: 'Mike Chen',
      priority: 'Critical',
      status: 'Review',
      dueDate: '2024-01-12',
      project: 'Backend Services',
      progress: 90
    },
    {
      id: 3,
      title: 'User Authentication',
      description: 'Implement secure user authentication and authorization system',
      assignee: 'Emily Davis',
      priority: 'High',
      status: 'Completed',
      dueDate: '2024-01-10',
      project: 'Security',
      progress: 100
    },
    {
      id: 4,
      title: 'Mobile Responsiveness',
      description: 'Ensure all components are fully responsive across mobile devices',
      assignee: 'Alex Rodriguez',
      priority: 'Medium',
      status: 'To Do',
      dueDate: '2024-01-20',
      project: 'Frontend',
      progress: 0
    },
    {
      id: 5,
      title: 'Database Optimization',
      description: 'Optimize database queries and implement caching strategies',
      assignee: 'David Kim',
      priority: 'Medium',
      status: 'In Progress',
      dueDate: '2024-01-18',
      project: 'Performance',
      progress: 45
    },
    {
      id: 6,
      title: 'Testing Suite',
      description: 'Develop comprehensive unit and integration tests',
      assignee: 'Lisa Wang',
      priority: 'High',
      status: 'In Progress',
      dueDate: '2024-01-25',
      project: 'Quality Assurance',
      progress: 30
    },
    {
      id: 7,
      title: 'Documentation',
      description: 'Create user guides and technical documentation',
      assignee: 'Tom Wilson',
      priority: 'Low',
      status: 'To Do',
      dueDate: '2024-01-30',
      project: 'Documentation',
      progress: 10
    },
    {
      id: 8,
      title: 'Performance Monitoring',
      description: 'Set up application performance monitoring and alerting',
      assignee: 'Rachel Green',
      priority: 'Medium',
      status: 'Review',
      dueDate: '2024-01-22',
      project: 'DevOps',
      progress: 85
    }
  ];

  getPriorityClass(priority: string): string {
    switch (priority) {
      case 'Critical': return 'priority-critical';
      case 'High': return 'priority-high';
      case 'Medium': return 'priority-medium';
      case 'Low': return 'priority-low';
      default: return 'priority-medium';
    }
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Completed': return 'status-completed';
      case 'In Progress': return 'status-progress';
      case 'Review': return 'status-review';
      case 'To Do': return 'status-todo';
      default: return 'status-todo';
    }
  }

  getProgressClass(progress: number): string {
    if (progress >= 80) return 'progress-high';
    if (progress >= 50) return 'progress-medium';
    if (progress >= 20) return 'progress-low';
    return 'progress-none';
  }



  constructor(public theme:ThemeService){}
}
