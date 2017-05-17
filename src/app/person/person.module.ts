import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PersonComponent } from './person.component';

export const routes = [
  {path: '', component: PersonComponent, pathMatch: 'full'},
  {path: ':id', component: PersonComponent}
];

@NgModule({
  declarations: [
    PersonComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class PersonModule {
  static routes = routes;
}
