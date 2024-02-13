import { DoBootstrap, Injector, NgModule } from '@angular/core';
 import { createCustomElement } from '@angular/elements';
import { InsuranceComponent } from '../app/insurance.component';
import { InsuranceModule } from '../app/insurance.module';
import { EntryComponent } from './entry.component';
@NgModule({
  declarations: [EntryComponent],
  imports: [InsuranceModule]
})
export class MicroFrontendModule implements DoBootstrap {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap(): void {
    const customElement = createCustomElement(EntryComponent, {
      injector: this.injector,
    });
    window.customElements.define('mf-insurance-entry', customElement);
    console.log('Registered custom element mf-insurance-entry');
  }
}