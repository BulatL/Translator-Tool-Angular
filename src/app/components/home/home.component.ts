import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  textForTranslate = '';
  translatedText = '';
  lastTextForTranslate = '';
  timeout: any = null;

  constructor(private translationService: TranslationService, private router: Router) { }

  ngOnInit() {
  }

  getTranslate(){
    clearTimeout(this.timeout);
    //exit if the string does not have at least one character
    if (!/\S/.test(this.textForTranslate)){
      this.translatedText = '';
      return;
    }
    
    this.timeout = setTimeout(() => {
        this.translationService.getTranslate(this.textForTranslate)
        .subscribe(
          response => {
            this.translatedText = response,
            this.lastTextForTranslate = this.textForTranslate
          },
          error => console.log("Greska...")
        );
    },3000);
  }

  btnTranslate(){
    clearTimeout(this.timeout);
    if (/\S/.test(this.textForTranslate)){
      let text = this.textForTranslate;
      let needTranslate = 'y';
      //if user didn't change text since last call to backedn, 
      //pass translated text and param needTranslate = 'n' which means we don't have to call the backedn again
      if(this.lastTextForTranslate === this.textForTranslate){
        needTranslate = 'n';
        text = this.translatedText;
      }
      this.router.navigate(['/translation', text, needTranslate])
    }
  }
}