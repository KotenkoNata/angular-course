import { Component, DestroyRef, effect, inject, OnInit, signal } from "@angular/core";

import { interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  clickCount = signal(0);

  constructor() {
    effect(() => { 
      console.log(`Click count: ${this.clickCount()}`);
    })
  }

  ngOnInit():void {
    // const subscription = interval(1000).pipe(
    //   map((val) => val*2)
    // ).subscribe({
    //   next: (value) => {
    //     console.log(`Interval tick: ${value}`);
    //   }
    // });

    // this.destroyRef.onDestroy(() => { 
    //   subscription.unsubscribe();
    //  })
  }

  onClick(): void { 
    this.clickCount.update(count => count + 1);
   }
}
