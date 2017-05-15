import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PersonComponent } from './person.component';

export const routes = [
  {path: '', component: PersonComponent, pathMatch: 'full'},
  {path: ':id', component: PersonComponent}
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    PersonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [
  ]
})
export class PersonModule {
  static routes = routes;
}
