import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-language',
  imports: [MatMenuModule, MatIconModule,CommonModule],
  templateUrl: './language.component.html',
  styleUrls:[ './language.component.css'],
   encapsulation: ViewEncapsulation.None 
})
export class LanguageComponent {


   selectedLanguage = 'English';
  
  country:any=[
  { code: 'en', name: 'English', flag: '/assest/flag/uk.png' },
  { code: 'es', name: 'Español', flag: '/assest/flag/de.png' },
  { code: 'fr', name: 'Français', flag: '/assest/flag/fr.png' }
  ]

selectedLang = this.country[0]; // default English
   setLanguage(lang: any) {
    this.selectedLanguage = lang.name;
if(this.selectedLanguage == 'Español')
{
this.selectedLang = this.country[1];
  console.log("calling1")

}
else if(this.selectedLanguage =='Français')
{
  this.selectedLang = this.country[2];
  console.log("calling2" ,this.selectedLang ,this.selectedLanguage )

}
else{
  this.selectedLang = this.country[0];
  console.log("calling0")
}

  }
}
