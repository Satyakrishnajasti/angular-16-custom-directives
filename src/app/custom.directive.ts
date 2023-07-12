import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  inject,
} from '@angular/core';

@Directive({
  selector: '[appCustom]',
  standalone: true,
})
export class CustomDirective implements OnInit {
  protected element = inject(ElementRef);
  @HostBinding('style.color') color!: string;
  @HostBinding('style.border-color') borderColor!: string;
  @HostBinding('style.cursor') cursor = 'pointer';

  possibleColors = [
    'darksalmon',
    'hotpink',
    'lightskyblue',
    'goldenrod',
    'peachpuff',
    'mediumspringgreen',
    'cornflowerblue',
    'blanchedalmond',
    'lightslategrey',
  ];

  constructor() {
    this.element.nativeElement.style.color = 'red';
    this.element.nativeElement.style.fontSize = '20px';
  }

  @Input({ required: true }) randomNum!: number;

  @HostListener('click') click() {
    const colorPick = Math.floor(Math.random() * this.possibleColors.length);
    this.color = this.borderColor = this.possibleColors[colorPick];
  }

  // @HostListener('mouseover') onHover() {
  //   this.element.nativeElement.style.cursor = 'pointer';
  // }

  // @HostListener('mouseout') mouseOut() {
  //   alert('Mouse out');
  // }

  // @HostListener('mousedown') mouseDown() {
  //   alert('Mouse Down');
  // }

  // @HostListener('mouseup') mouseUp() {
  //   alert('Mouse up');
  // }

  // @HostListener('mousemove') mouseMove() {
  //   alert('Mouse Move');
  // }

  // @HostListener('keypress') keyPress() {
  //   alert('Keypress');
  // }

  // @HostListener('keyup') KeyUp() {
  //   alert('KeyUp');
  // }

  // @HostListener('input') input() {
  //   alert('input');
  // }

  // @HostListener('keydown') KeyDown() {
  //   alert('KeyDown');
  // }
  // @HostListener('focus') focus() {
  //   this.element.nativeElement.style.color = 'blue';
  // }

  // @HostListener('change') change() {
  //   alert('Change');
  // }

  // @HostListener('blur') blur() {
  //   alert('blur');
  // }

  // @HostListener('reset') reset() {
  //   alert('reset');
  // }

  ngOnInit(): void {
    if (this.randomNum % 2 == 0) {
      this.color = 'green';
    }
  }
}
