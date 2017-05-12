import { Component, Input, ViewEncapsulation } from '@angular/core';

declare var pbi:any;

@Component({
  selector: 'pbi',
  templateUrl: './pbi.template.html',
  styleUrls: ['./pbi.style.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PbiComponent {
    @Input()
    prop1:string;

    constructor() {
        //initiaize the pbi connection
    }

    refresh() {
        this.prop1 = "bar";
    }


}
