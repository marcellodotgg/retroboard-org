import { Routes } from '@angular/router';
import { BoardPageComponent } from './pages/board-page/board-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

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
    path: '**',
    redirectTo: '',
  },
];
