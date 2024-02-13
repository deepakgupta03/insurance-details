import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Insurance, InsuranceService } from '../insurance.service';

@Component({
  selector: 'app-insurance-list',
  templateUrl: './insurance-list.component.html',
  styleUrls: ['./insurance-list.component.scss']
})
export class InsuranceListComponent implements OnInit {
  insurances: Insurance[] = [];

  constructor( private router: Router,private insuranceService: InsuranceService) {
     this.insurances = this.insuranceService.getInsurances();
  }

  ngOnInit(): void {
    this.insurances = this.insuranceService.getInsurances();
  }

  viewInsuranceDetails(insurance: Insurance): void {
    this.router.navigate(['/insurance', insurance.id]);
  }
}
