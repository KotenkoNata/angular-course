import { Component, computed, DestroyRef, effect, inject, OnInit, signal } from "@angular/core";

import { interval, map, Observable } from 'rxjs';

import { toObservable, toSignal } from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  clickCount = signal(0);
  clickCount$ = toObservable(this.clickCount);
  interval$ = interval(1000);
  intervalSignal = toSignal(this.interval$, { initialValue: 0 });
  customInterval$ = new Observable((subscriber) => { 
    let timesExecuted = 0;
    const interval = setInterval(() => { 
      // subscriber.error();
      if (timesExecuted > 3) {
        clearInterval(interval);
        subscriber.complete();
      }
      console.log('Emitting new value');
      subscriber.next({ message: 'New Value' });
      timesExecuted++;
    },2000)
  });
  // interval = signal(0);
  // doubleInterval = computed(() => { 
  //   this.interval() * 2;
  //  })

  constructor() {
    // effect(() => { 
    //   console.log(`Click count: ${this.clickCount()}`);
    // })
  }

  ngOnInit(): void {
    // setInterval(() => { 
    //   this.interval.update(value => value + 1);
    // },1000)
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
    this.customInterval$.subscribe({
      next: (value) => {
        console.log(`Custom interval observable: ${value}`);
      },

      complete: () => { 
        console.log('Custom interval observable completed');
      }
    });
    const subscription = this.clickCount$.subscribe({
      next: (value) => {
        console.log(`Click count observable: ${this.clickCount()}`);
      }
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  onClick(): void { 
    this.clickCount.update(count => count + 1);
   }
}
