import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {
  constructor() {
    this.setInitialData();
  }

  getInsurances(): Insurance[] {
    const insurancesString = localStorage.getItem('insurances');
    return insurancesString ? JSON.parse(insurancesString) : [];
  }

  getInsuranceById(id: number): Insurance | undefined {
    const insurances = this.getInsurances();
    return insurances.find(insurance => insurance.id === id);
  }

  private setInitialData(): void {
    const initialInsurances: Insurance[] = [
      { id: 1, name: 'Insurance A', type: 'Health', policyNumber: '123456', expirationDate: '2024-12-31', premiumAmount :10000 },
      { id: 2, name: 'Insurance B', type: 'Auto', policyNumber: '789012', expirationDate: '2024-10-15', premiumAmount:5000 },
    ];

    // Save initial data to local storage if it doesn't exist already
    if (!localStorage.getItem('insurances')) {
      localStorage.setItem('insurances', JSON.stringify(initialInsurances));
    }
  }
}

export interface Insurance {
  id: number;
  name: string;
  type: string;
  policyNumber: string;
  expirationDate: string;
  premiumAmount: number;
}
