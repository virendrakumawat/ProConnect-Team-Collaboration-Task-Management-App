import { Component } from '@angular/core';
import { AuthLayoutComponent } from '../../shared/auth-layout/auth-layout.component';
import { Router, RouterLink } from '@angular/router';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ValidationService } from '../../services/validation.service';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgot-password-verify-code',
  imports: [AuthLayoutComponent,CommonModule,ReactiveFormsModule],
  templateUrl: './forgot-password-verify-code.component.html',
  styleUrl:'./forgot-password-verify-code.component.css'
})
export class ForgotPasswordVerifyCodeComponent {

  verifyCodeForm!:FormGroup
  spinner:boolean =false;

  constructor(private fb:FormBuilder , private validationService:ValidationService,
    private authservice:AuthService, private router:Router, private toaster:ToastrService 
  ) {
    // Initialization logic can go here if needed
   this.verifyCodeForm = this.fb.group({
      verificationCode: ['',Validators.required],
      });
    }

    verifyCode(){
      if (this.verifyCodeForm.valid) {
        this.spinner=true;
        console.log('Verification Code Submitted:', this.verifyCodeForm.value);
        const email = JSON.parse(JSON.stringify(sessionStorage.getItem('email')))
        const obj:any={
          email:email,
          code:this.verifyCodeForm.value.verificationCode
        }
        console.log(obj)
        this.authservice.verifyOtpFn(obj).subscribe({
          next: (response) => {
             console.log('Verification successful:', response);
             sessionStorage.setItem('token',response.resetToken)
             this.spinner=false;
            this.toaster.success('Verification successful');
            this.router.navigate(['/set-new-password']);
          },
          error: (error) => {
             this.spinner=false;
            console.error('Verification failed:', error);
            this.toaster.error('Please Correct OTP Or Verification failed due to network issue. Please try again.');
          }
        });
      } else {
        this.verifyCodeForm.markAllAsTouched(); // Show all errors if form invalid
      }
    }

    getformError(controlName:string){
      return this.validationService.getFormError(this.verifyCodeForm, controlName);
    }

}
