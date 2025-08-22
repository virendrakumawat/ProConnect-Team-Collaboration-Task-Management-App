import { Component } from '@angular/core';
import { AuthLayoutComponent } from '../../shared/auth-layout/auth-layout.component';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidationService } from '../../services/validation.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-forgot-password',
  imports: [AuthLayoutComponent,CommonModule, ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {

  forgotForm!:FormGroup;
 spinner:boolean=false;
  constructor(private fb: FormBuilder , private validationService: ValidationService , private authservice: AuthService, private router:Router,private toaster:ToastrService) {
   this.forgotForm = this.fb.group({
        email: ['',[Validators.required, Validators.email]],
      });
    }



    getformError(controlName:string){
      return this.validationService.getFormError(this.forgotForm, controlName);
    }

    ForgotFormSubmit(){
      this.spinner= true;
      if (this.forgotForm.valid) {
        console.log('Form Submitted:', this.forgotForm.value);
        // Here you can add the logic to handle the form submission, like calling an API
        this.authservice.forgotPasswordFn(this.forgotForm.value.email).subscribe({
          next: (response) => {
            sessionStorage.setItem('email', JSON.parse(JSON.stringify(this.forgotForm.value.email)));
            this.spinner=false;
            console.log('Forgot password request successful:', response);

            this.toaster.success('OTP sent to your email successfully!', 'Success');
            this.router.navigate(['/verify-code']);

          },
          error: (error) => {
            console.error('Error during forgot password request:', error);
            this.toaster.error(error, 'Error');
             this.spinner=false
            // Handle error appropriately, e.g., show a notification
          }
        }); 
      } else {
        this.forgotForm.markAllAsTouched(); // Show all errors if form invalid
      }
    }
}
