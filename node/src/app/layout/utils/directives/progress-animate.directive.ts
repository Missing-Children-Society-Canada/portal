import { Directive, ElementRef } from '@angular/core';
declare let jQuery: any;

@Directive ({
  selector: '[progress-animate]'
})

export class ProgressAnimate {
  $el: any;

  constructor(el: ElementRef) {
    this.$el = jQuery(el.nativeElement);
  }

  ngOnInit(): void {
    let width = this.$el.data('width'),
      $bar = this.$el;
    $bar.css('opacity', 0);
    setTimeout(() => {
      $bar.css({
        transition: 'none',
        width: 0,
        opacity: 1
      });
      setTimeout(() => {
        $bar.css('transition', '').css('width', width);
      });
    });
  }
}
