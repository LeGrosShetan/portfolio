import { Routes } from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {ContactComponent} from "./contact/contact.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";

export const routes: Routes = [
  {
    path: '',
    component: AccueilComponent,
    title: 'Accueil'
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'A Propos'
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact'
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    title: 'Portfolio'
  }
];
