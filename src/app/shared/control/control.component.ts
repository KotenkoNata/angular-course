import { Component, ViewEncapsulation, input, HostBinding, HostListener } from '@angular/core';

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
  @HostListener('click') onClick(){
    console.log('click');
  }
  label = input.required<string>();

}
