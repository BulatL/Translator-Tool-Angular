import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor(private httpClient: HttpClient) { }

  getTranslate(text: string) {
    return this.httpClient.get(`/api/translation/${text}`) as Observable<string>;
  }
}