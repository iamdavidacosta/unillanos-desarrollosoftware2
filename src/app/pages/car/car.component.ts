import {Component, computed, signal} from '@angular/core';
import {UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-car',
  imports: [
    UpperCasePipe
  ],
  templateUrl: './car.component.html'
})
export class CarComponent {
  brand = signal('Renault');
  student = signal('Pepito perez - codigo');
  year = signal(2020);
  getCarDescription = computed(() => `${this.brand()} - ${this.year()}`)
  capitalizedStudent = computed(() => `${this.student().toUpperCase()}`)

  changeCar() {
    this.brand.set('Kia');
    this.year.set(2021);
  }

  resetForm() {
    this.brand.set('Renault');
    this.year.set(2020);
  }

  changeYear() {
    this.year.set(2025);
  }
/*
  getCarDescription() {
    return `${this.brand()} - ${this.year()}`;
  }*/
}
