import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebComparatorComponent } from './comparator/web/web-comparator.component';

const routes: Routes = [
  { path: 'comparator', component: WebComparatorComponent },
  { path: '', redirectTo: '/comparator', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
