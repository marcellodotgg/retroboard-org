import { Routes } from '@angular/router';
import { BoardPageComponent } from './pages/board-page/board-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PrivacyPageComponent } from './pages/privacy-page/privacy-page.component';
import { TermsPageComponent } from './pages/terms-page/terms-page.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePageComponent,
  },
  {
    path: 'boards/:id',
    component: BoardPageComponent,
  },
  {
    path: 'privacy',
    component: PrivacyPageComponent,
  },
  {
    path: 'terms',
    component: TermsPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
