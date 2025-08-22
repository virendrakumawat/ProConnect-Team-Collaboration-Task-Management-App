import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {


   errorMessages: { [key: string]: { [key: string]: string } } = {
    firstName: { required: 'First Name is required' },
    lastName: { required: 'Last Name is required' },
    email: { required: 'Email is required', email: 'Enter a valid email' },
    password: { required: 'Password is required', minlength: 'Minimum 6 characters' ,letters: 'Password must contain at least one letter', numbers: 'Password must contain at least one number'},
    confirmPassword: { required: 'Confirm Password is required' ,     passwordMismatch: 'Passwords do not match'},
    phoneNumber: { required: 'Phone Number is required', pattern: 'Enter valid 10-digit number' },
    acceptPolicy: { required: 'You must accept the privacy policy' },
    rememberMe: { required: 'You Must Click ' },
    verificationCode: { required: 'Verification code is required for reset your password' },

  };

  
  // showing the error 
getFormError(form:FormGroup , controlName: string): string[] {
 const control = form.get(controlName);
  if (!control) return [];

  const isTouched = control.touched || control.dirty;

  let errors: string[] = [];

  // Field-specific errors
  if (control.errors && isTouched) {
    errors = Object.keys(control.errors).map(key => this.errorMessages[controlName][key]);
  }

  // Cross-field error for confirmPassword
  if (controlName === 'confirmPassword' && form.errors?.['passwordMismatch'] && isTouched) {
    errors.push(this.errorMessages[controlName]['passwordMismatch']);
  }

  return errors;
}



//  checking the password complexity 
   passwordComplexityValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value || '';

    // Minimum 6 characters
    if (value.length < 6) return { minlength: true };

    // At least 2 letters
    const letterMatch = value.match(/[A-Za-z]/g) || [];
    if (letterMatch.length < 1) return { letters: true };

    // At least 2 numbers
    const numberMatch = value.match(/[0-9]/g) || [];
    if (numberMatch.length < 1) return { numbers: true };

    return null; // valid
  };
}

// Confirm password validator (cross-field)
 passwordMatchValidator(form:FormGroup): ValidationErrors | null {
  const password = form.get('password')?.value;
  const confirmPassword = form.get('confirmPassword')?.value;

  if (password && confirmPassword && password !== confirmPassword) {
    return { passwordMismatch: true };
  }
  return null;
}
}
