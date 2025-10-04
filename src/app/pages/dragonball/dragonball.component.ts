import {Component, computed, signal} from '@angular/core';
import {NgClass} from '@angular/common';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball',
  imports: [
    NgClass
  ],
  templateUrl: './dragonball.component.html'
})
export class DragonballComponent {
  name = signal('');
  power= signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 8008 },
    { id: 2, name: 'Vegeta', power: 7000 },
    { id: 4, name: 'Yamcha', power: 500 },
    { id: 3, name: 'Piccolo', power: 4000 },
  ]);

  powerClass = computed(() => {
    return {
      'text-danger': true
    };
  });

  addCharacter() {
    if(!this.name() || !this.power() || this.power() < 0) {
      return;
    }

    const newCharacter = {
      id: this.characters.length + 1,
      name: this.name(),
      power: this.power(),
    }
/*
    const objectTest = {
      name: this.name(),
      apellido: 'perez'
    }
    console.log(objectTest);

    const newObject = {
      ...objectTest,
      edad:20,
      name: 'Carlos'
    }
    console.log(newObject);*/

  //  const newListCharacters =  [...this.characters(), newCharacter];

   // this.characters().push(newCharacter);
    this.characters.update((list) => [...list, newCharacter]);
    this.resetFields();
  }

  resetFields() {
    this.name.set('')
    this.power.set(0)
  }
}
