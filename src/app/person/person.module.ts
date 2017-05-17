import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person.component';
import { FormsModule } from '@angular/forms';

export const routes = [
  {path: '', component: PersonComponent, pathMatch: 'full'},
  {path: ':id', component: PersonComponent}
];

@NgModule({
  declarations: [
    PersonComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule
  ]
})
export class PersonModule {
  static routes = routes;
}
