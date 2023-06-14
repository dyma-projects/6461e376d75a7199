import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]',
})
export class ColorDirective {
  constructor(private el: ElementRef) {}
  @HostListener('window:keyup', ['$event']) toucheFleche(e: KeyboardEvent) {
    if (e.key == 'ArrowLeft') {
      this.el.nativeElement.style.color = 'red';
      console.log('arrowLeft');
    } else if (e.key == 'ArrowRight') {
      this.el.nativeElement.style.color = 'blue';
      console.log('arrowRight');
    } else if (e.key == 'ArrowUp') {
      this.el.nativeElement.style.color = 'green';
      console.log('arrowUp');
    } else if (e.key == 'ArrowDown') {
      this.el.nativeElement.style.color = 'yellow';
      console.log('arrowDown');
    }
  }
}
