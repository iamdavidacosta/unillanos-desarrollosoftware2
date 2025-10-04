import { effect, Injectable } from '@angular/core';
import { signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

const loadFromLocalStorage = (): Character[] => {
  const data = localStorage.getItem('dragonball-characters');
  return data ? JSON.parse(data) : [];
}

@Injectable({
  providedIn: 'root'
})
export class DragonballService {

  characters = signal<Character[]>(loadFromLocalStorage());

  // characters = signal<Character[]>([
  //   {id: 1, name: 'Goku', power: 10000},
  //   {id: 2, name: 'Vegeta', power: 5000},
  //   {id: 3, name: 'Cell', power: 8000},
  //   {id: 4, name: 'Yamcha', power: 500},
  // ]);

   saveToLocalStorage:any = effect(() => {
  //   console.log((`Character count ${this.characters().length}, saving to localStorage`));
  //   localStorage.setItem('dragonball-characters', JSON.stringify(this.characters()));
      localStorage.setItem('dragonball-characters', JSON.stringify(this.characters()));
  });

  onCharacterAdded(newCharacter: Character): void {
    this.characters.update((list) => [...list, newCharacter]);
  }

}
