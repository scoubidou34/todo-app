import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EmptyComponent } from './empty/empty.component';

import { DetailsComponent } from './details/details.component';
const routes: Routes = [
  {
    path: '',
    component: EmptyComponent
  },
  {
    path: 'back', redirectTo :''
  },
  {
    path: 'tree',
    component : DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
