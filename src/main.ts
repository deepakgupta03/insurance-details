import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { InsuranceModule } from './app/insurance.module';
import { MicroFrontendModule } from './micro-frontend/micro-frontend.module';

platformBrowserDynamic()
   .bootstrapModule(MicroFrontendModule)
  .catch((err) => console.error(err));
