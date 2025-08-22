import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {


  const router= inject(Router);
  let user:any=sessionStorage.getItem('user')
  // console.log()
  if(user)
  {
    try{
      let token =JSON.parse(user).token
      if(token)
      {
      return true;
      }
      else{
         router.navigate(['/sign-in']);
         return false;
      }
    }
    catch(e){
      console.error("Invalid user data in sessionStorage", e);
      router.navigate(['/sign-in']);
      return false;
    }
    
  }

  else{
    router.navigate(['/sign-in'])
    return false;
  }
  
};
