import { Component } from '@angular/core';
import { AuthLayoutComponent } from '../../shared/auth-layout/auth-layout.component';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, ɵInternalFormsSharedModule } from '@angular/forms';
import { ValidationService } from '../../services/validation.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AuthLayoutComponent, RouterLink, CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl:'./login.component.css'
  
})
export class LoginComponent {
    SignInForm !:FormGroup;
    Password:boolean=false;
    spinner:boolean=false;

    showConfirmPassword(){
      this.Password  = !this.Password
    }


    constructor(private router:Router,private fb: FormBuilder , private ValidatorService:ValidationService , private toaster:ToastrService ,
       private authservice:AuthService  
    ) {

      this.SignInForm = this.fb.group({
        email: ['',[Validators.required , Validators.email]],
         password:['', [Validators.required, Validators.minLength(6),]],
         rememberMe: [false,Validators.requiredTrue],
      });
      // Initialization logic can go here if needed
    }


    getformError(controlName: string) {
      return this.ValidatorService.getFormError(this.SignInForm, controlName);
    }
    SignInFormData(){
      if (this.SignInForm.valid) {
        this.spinner=true;
        // Call the authentication service to handle login
        this.authservice.signInfn(this.SignInForm.value).subscribe({
          next: (response:any) => {
            sessionStorage.setItem('user', JSON.stringify(response)); // Store user data in session
            sessionStorage.setItem('token',JSON.stringify(response.token))
            this.spinner=false
            this.toaster.success('Login Successful', 'Success');
            // Navigate to the dashboard or home page
            this.router.navigate(['/dashboard']); // Adjust the route as needed
            this.SignInForm.reset(); // Reset the form after successful login
          },
          error: (error) => {
            this.toaster.error('Login Failed', 'Error');
            console.error('Login error:', error);
             this.spinner=false
          }
        });
      } else {
        this.SignInForm.markAllAsTouched(); // Show all errors if form invalid
      }
    }


}
