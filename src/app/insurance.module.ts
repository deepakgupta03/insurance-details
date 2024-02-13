import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsuranceDetailComponent } from './insurance-detail/insurance-detail.component';
import { RouterModule } from '@angular/router';
import { InsuranceListComponent } from './insurance-list/insurance-list.component';
import { InsuranceComponent } from './insurance.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [InsuranceDetailComponent, InsuranceListComponent,InsuranceComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'insurance/:id',
        component: InsuranceDetailComponent
      },
      {
        path: 'insurance',
        component: InsuranceListComponent
      }
    ]),
  ],
// bootstrap: [InsuranceComponent]
   exports: [InsuranceComponent],
})
export class InsuranceModule { }
