import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerServiceService {

  constructor() { }


  handle(error: any) {
    console.error("API Error:", error);

    let errorMsg = "Something went wrong. Please try again later.";
    if (error.status === 400) {
      errorMsg = "Email already exists or invalid input.";
    } else if (error.status === 409) {
      errorMsg = "User already exists.";
    } else if (error.status === 500) {
      errorMsg = "Server error. Please contact support.";
    }

    return throwError(() => errorMsg);
  }
}
