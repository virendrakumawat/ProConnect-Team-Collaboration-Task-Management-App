import { Component, Renderer2 } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup ,ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ValidationService } from '../../services/validation.service';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup-page',
  imports: [RouterLink,ReactiveFormsModule,CommonModule],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupPageComponent {
  
 
  SignUpForm!:FormGroup;
  showPasswordtoggle: boolean = false;
  confirmPassword:boolean = false;
  spinner:boolean=false;

  constructor(public fb:FormBuilder , 
    private PrivateValidationService:ValidationService , public render:Renderer2 , 
    private authservice:AuthService, public toasterService:ToastrService , 
    private router:Router) {
    this.fnCreateSignUpForm(); 
  }




  //  Create SignUp Form

  fnCreateSignUpForm(){
    this.SignUpForm = this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(6),this.PrivateValidationService.passwordComplexityValidator()]],
      confirmPassword:['', [Validators.required, Validators.minLength(6)]],
      phoneNumber:['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      acceptPolicy: [false, Validators.requiredTrue],
    },{ validators: this.PrivateValidationService.passwordMatchValidator });

  }

  SignUpFormData(){
     if (this.SignUpForm.valid) {
      this.spinner=true;
      this.authservice.signUpFn(this.SignUpForm.value).subscribe({
        next: (result =>{
          console.log(result)
          this.spinner=true;
          this.toasterService.success("Succesfully login", 'Success')
          this.SignUpForm.reset();
          this.router.navigate(['/login']);

        }),
        error : (error =>{
          console.log(error)
          this.spinner=false;
          this.toasterService.error(error, 'Error')
        })
      })
    } else {
      this.SignUpForm.markAllAsTouched(); // Show all errors if form invalid
    }
  }


  //  collecting the error message 
getformError(controlName:string) {
  return this.PrivateValidationService.getFormError(this.SignUpForm, controlName);
}


showPassword(){
  this.showPasswordtoggle = !this.showPasswordtoggle;
}
showConfirmPassword(){
  this.confirmPassword = !this.confirmPassword;}

}
