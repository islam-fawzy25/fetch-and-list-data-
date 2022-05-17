import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataListComponent } from './src/app/data-list/data-list.component';
import { HomeComponent } from './src/app/home/home.component';

const routes: Routes =
  [
    { path: 'home', component: HomeComponent },

    { path: 'data', component: DataListComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
