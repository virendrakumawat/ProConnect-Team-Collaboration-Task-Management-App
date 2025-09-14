import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {


  themeMode = signal(localStorage.getItem('mode') || 'light');
  constructor() { }



   toggleTheme() {
    const newMode = this.themeMode() === 'light' ? 'dark' : 'light';
    this.themeMode.set(newMode);
    localStorage.setItem('mode', newMode);
    this.applyTheme(newMode);
  }



  private applyTheme(mode:string){
     document.body.classList.remove('lightMode', 'darkMode');
    document.body.classList.add(mode);
  }
}
