import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslationComponent } from './components/translation/translation.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'translation/:passedText/:needTranslate', component: TranslationComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
