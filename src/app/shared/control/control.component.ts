import {
  Component,
  ViewEncapsulation,
  input,
  inject,
  ElementRef,
  contentChild,
  AfterViewInit,
  afterRender, afterNextRender
} from '@angular/core';

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
export class ControlComponent implements AfterViewInit{
  // @HostListener('click') onClick(){
  //   console.log('click');
  // }
  label = input.required<string>();

  private el = inject(ElementRef);
  // @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;

  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  constructor() {
    afterRender(()=>{
      console.log('AFTER RENDER')
    });

    afterNextRender(()=>{
      console.log('AFTER NEXT RENDER')
    });
  }

  ngAfterViewInit() {

  }

  onClick(){
    console.log('click');
    console.log(this.el);
    console.log(this.control())
  }
}
