import { animate, state, style, transition, trigger } from '@angular/animations';

// How to use it
// add:  animations: [enterItem]
// add to html tag, example: <tr *ngFor="let item of items; let i=index" [@EnterItem]="{value:'', params:{delay:100 * i}}">
export const enterItem = trigger('EnterItem', [
  transition(':enter', animate('300ms {{delay}}ms')),
  state('void', style({ transform: 'translateX(100%)', opacity: 0 })),
  state('*', style({ transform: 'translateX(0)', opacity: 1 })),
]);
