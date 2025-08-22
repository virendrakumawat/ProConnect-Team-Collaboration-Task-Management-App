import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  imports: [CommonModule,RouterLink],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css'
})
export class AuthLayoutComponent {
 

  @Input() rightImage:string=''
  @Input() rightImageAlt:string=''
  @Input() heading:string=''
  @Input() subHeading:string=''
  @Input() showBackButton:string='false';
}
