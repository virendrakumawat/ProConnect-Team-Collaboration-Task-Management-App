import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AutoLogoutService } from './services/auto-logout.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ProConnect-team-collaboration-and-task-management-app';
  token:any;
  constructor(private autologout:AutoLogoutService){}

  ngOnInit(): void {
    if(sessionStorage.getItem('token'))
    { 
      this.autologout.startInactiveTimer();
      console.log("App working")
    }
  }



  @HostListener('document:mousemove')
  // @HostListener('')
  @HostListener('document:keydown')
  @HostListener('document:click')
  resetUserTimer(){
    this.autologout.resetTimer();
  }
}
