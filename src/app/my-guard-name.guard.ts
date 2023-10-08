import { CanDeactivateFn } from '@angular/router';

export const myGuardNameGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  console.log('OJALA PASE POR')
  return true;
};



import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
  canDeactivate?: () => Observable<boolean> | Promise<boolean> | boolean;
}

export const canDeactivateGuard: CanDeactivateFn<CanComponentDeactivate> =
    (component: CanComponentDeactivate) => component.canDeactivate ? component.canDeactivate() : true;

   // https://stackblitz.com/edit/angular-y5slak?file=src%2Fapp%2Fcrisis-center%2Fcrisis-center-routing.module.ts,src%2Fapp%2Fcan-deactivate.guard.ts,src%2Fapp%2Fcrisis-center%2Fcrisis-detail%2Fcrisis-detail.component.ts