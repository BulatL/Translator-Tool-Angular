import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.css']
})
export class TranslationComponent implements OnInit {
  translatedText = '';
  passedText = '';
  
  constructor(private route: ActivatedRoute, private translationService: TranslationService) { }

  ngOnInit() {
    this.passedText = this.route.snapshot.paramMap.get('passedText');
    const needTranslate = this.route.snapshot.paramMap.get('needTranslate');
    //if passed param needTranslate = 'y' it means that passedText param need to be translated
    if(needTranslate === 'y'){
      this.translationService.getTranslate(this.passedText)
      .subscribe(
        response => {
          this.translatedText = response
        },
        error => console.log("Greska...")
      );
    }
    else{
      this.translatedText = this.passedText;
    }
  }

}