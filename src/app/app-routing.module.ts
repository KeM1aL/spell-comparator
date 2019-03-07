import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComparatorComponent } from './comparator/comparator.component';

const routes: Routes = [
  { path: 'comparator', component: ComparatorComponent },
  { path: '', redirectTo: '/comparator', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
