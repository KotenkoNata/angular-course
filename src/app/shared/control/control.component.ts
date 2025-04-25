import { Component, ViewEncapsulation, input, inject, ElementRef } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent {
  // @HostListener('click') onClick(){
  //   console.log('click');
  // }
  label = input.required<string>();

  private el = inject(ElementRef);

  onClick(){
    console.log('click');
    console.log(this.el);
  }
}
