// ng new nombre

import {ChangeDetectionStrategy, Component, signal} from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
   styleUrl:'./counter-page.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush
})


export class CounterPageComponent {
  counter:number = 0;
  counterSignal = signal(0)
/*
  constructor() {
    setInterval(()=>{
      this.counter += 1;
      //this.counterSignal.update((currentValue:number) => currentValue + 1 );
      console.log("Se actualizo");
    },1000);
  }*/

  add(value: number) {
    this.counter += value;
    this.counterSignal.update((currentValue: number) => {
      return currentValue + value;
    });
  }



  decrease(value: number) {
    this.counter -= value;
    this.counterSignal.update((currentValue:number) => currentValue - value );
  }

  reset() {
    this.counter = 0;
    this.counterSignal.set(0)
  }
  ////


}
//https://github.com/Dani472/ejercicios-clase/blob/main/Actividad-26-09.md












