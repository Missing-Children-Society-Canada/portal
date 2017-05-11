import { Directive, ElementRef } from '@angular/core';
declare let jQuery: any;

@Directive ({
  selector: '[number-animate]'
})

export class AnimateNumber {
  $el: any;

  constructor(el: ElementRef) {
    this.$el = jQuery(el.nativeElement);
  }

  ngOnInit(): void {
    this.$el.animateNumber({
      number: this.$el.text().replace(/ /gi, ''),
      numberStep: jQuery.animateNumber.numberStepFactories.separator(' '),
      easing: 'easeInQuad'
    }, 1000);
  }
}
