import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsuranceListComponent } from './insurance-list/insurance-list.component';
import { InsuranceDetailComponent } from './insurance-detail/insurance-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/insurance', pathMatch: 'full' },
  { path: 'insurance', component: InsuranceListComponent },
  { path: 'insurance/:id', component: InsuranceDetailComponent },
  { path: 'payment' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
