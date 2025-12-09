import { Routes } from '@angular/router';
import { ContactForm } from './components/contact-form/contact-form';
import { Hero } from './components/hero/hero';
import { Cards } from './components/cards/cards';
import { TestForm } from './components/test-form/test-form';
import { CarouselComponent } from './components/carousel/carousel';


export const routes: Routes = [
  { path: '', component: Hero},
  { path: 'test', component: TestForm},
  { path: 'services', component: Cards},
  { path: 'about', component: CarouselComponent},
  { path: 'contact', component: ContactForm },
];
