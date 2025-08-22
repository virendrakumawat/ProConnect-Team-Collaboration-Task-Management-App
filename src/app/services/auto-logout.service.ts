import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutoLogoutService {

  private logoutTimer:any;
  constructor(private route:Router) { }


  startInactiveTimer(){        //  if user login this detect the login and start the timer
    this.clearTimer();         // it clear old timer 
    this.logoutTimer=setTimeout(()=>{   // it check 15min don't have any acitvity automatically logout 
        this.logout();
    },15 * 60 * 1000);
  }

  resetTimer(){               // if user do any action click move type etc this will work it is basically restart the timmer 
    this.startInactiveTimer();
  }

 clearTimer(){                    // it clear old timer to make sure that multiple timer not work together 
  if(this.logoutTimer)
  {
    clearTimeout(this.logoutTimer)
  }
 }


  logout(){                 // logout and clear the session data before logout 
    sessionStorage.clear();
    this.route.navigate(['/sign-in']);
  }
}
