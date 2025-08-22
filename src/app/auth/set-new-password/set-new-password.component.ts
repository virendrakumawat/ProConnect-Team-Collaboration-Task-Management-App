import { Component } from '@angular/core';
import { AuthLayoutComponent } from '../../shared/auth-layout/auth-layout.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidationService } from '../../services/validation.service';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-set-new-password',
  imports: [AuthLayoutComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './set-new-password.component.html',
  styleUrl:'./set-new-password.component.css'
})
export class SetNewPasswordComponent {

showPasswordtoggle:boolean = false;
confirmPassword:boolean = false;
ResetPasswordForm!:FormGroup;
email:any = '';
spinner:boolean=false;
constructor(private fb : FormBuilder , private ValidationService:ValidationService, private authService:AuthService , private toaster:ToastrService,private router:Router)
{
  this.email = sessionStorage.getItem(JSON.parse(JSON.stringify('email')))
  this.ResetPasswordForm = this.fb.group({
    password: ['', [Validators.minLength(6),this.ValidationService.passwordComplexityValidator(), Validators.required]], 
    confirmPassword: ['', [Validators.required]]
  },{ validators: this.ValidationService.passwordMatchValidator });
}

  showPassword(){
  this.showPasswordtoggle = !this.showPasswordtoggle;
}
showConfirmPassword(){
  this.confirmPassword = !this.confirmPassword;}


ResetPasswordFormData(){
  if (this.ResetPasswordForm.valid) {
    this.spinner=true;
    const token :any= sessionStorage.getItem('token')
    
    const obj = {
      email:this.email,
      password:this.ResetPasswordForm.controls['password'].value
    }
    this.authService.resetPasswordFn(obj,token).subscribe({
      next:(response =>{
        this.spinner=false;
        console.log(response)
        this.toaster.success("Your Successfully Reset Password","Success");
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('email')

        this.router.navigate(['/login']);
      }),
      error:(error =>{
        this.spinner=false;
        console.log(error)
        this.toaster.error(error,"error")
      })
    })

  } else {
    this.ResetPasswordForm.markAllAsTouched(); // Show all errors if form invalid
  } 
}
getformError(controlName: string) {
return this.ValidationService.getFormError(this.ResetPasswordForm, controlName);  
}
}
