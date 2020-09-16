import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreaturesComponent } from './pages/creatures/creatures.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'albums',
    pathMatch: 'full'
  },
  {
    path: 'albums',
    loadChildren: () => import('./pages/albums/albums.module').then(m => m.AlbumsModule)
  },
  {
    path: 'creatures',
    component: CreaturesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
