import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Insurance, InsuranceService } from '../insurance.service';

@Component({
  selector: 'app-insurance-detail',
  templateUrl: './insurance-detail.component.html',
  styleUrls: ['./insurance-detail.component.scss']
})
export class InsuranceDetailComponent implements OnInit {
  insurance: Insurance | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private insuranceService: InsuranceService
  ) {
  }

  ngOnInit(): void {
     const id = +this.route.snapshot.paramMap.get('id')!;
    this.insurance = this.insuranceService.getInsuranceById(id);
    // console.log(this.insurance);
  }
}
