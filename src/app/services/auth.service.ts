import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest, LoginResponse, NewPassowrdRequest, SignUpRequest, SignUpResponse, verfiyRequest } from '../model/auth.model';
import { catchError, Observable, throwError } from 'rxjs';
import { ErrorHandlerServiceService } from './error-handler-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  apiUrl = "http://localhost:5000/api/auth/"
  
  signUpUrl = this.apiUrl + "signup";
  loginUrl = this.apiUrl + "login";
  ForgotPasswordUrl = this.apiUrl + "forgot-password";
  ResetPasswordUrl = this.apiUrl + "reset-password";
  VerifyOtpUrl = this.apiUrl + "verify-otp";

  constructor(private http: HttpClient, private errorAPi: ErrorHandlerServiceService) {
    console.log("AuthService initialized");
  }

  signUpFn(signupData: any): Observable<SignUpResponse> {
    let Object: SignUpRequest;
    Object = {
      firstName: signupData.firstName,
      lastName: signupData.lastName,
      email: signupData.email,
      phoneNumber: signupData.phoneNumber,
      role: "user",
      password: signupData.password
    }
    return this.http.post<SignUpResponse>(this.signUpUrl, Object).pipe(catchError(this.errorAPi.handle));
  }

  signInfn(loginData: any){
    let Object: LoginRequest = {
      email: loginData.email,
      password: loginData.password
    }
    console.log(Object,"signInfn")
    return this.http.post(this.loginUrl, Object).pipe(catchError(this.errorAPi.handle));
  }

  forgotPasswordFn(email: string): Observable<any> {
    return this.http.post(this.ForgotPasswordUrl, { email }).pipe(
      catchError(this.errorAPi.handle)
    )
  }

  verifyOtpFn(verifyData: any): Observable<any> {
    let obj :verfiyRequest = {
      email:verifyData.email,
      otp:verifyData.code
    }
    console.log(obj)
    return this.http.post(this.VerifyOtpUrl,obj).pipe(
      catchError(this.errorAPi.handle)
    )
  }

  resetPasswordFn(data: any , token:any): Observable<any> {
    const obj:NewPassowrdRequest={
      email:data.email,
      newPassword:data.password,
      resetToken:token
    }
    console.log(obj)

    return this.http.post(this.ResetPasswordUrl, obj ).pipe(
      catchError(this.errorAPi.handle)
    )
  }



}
