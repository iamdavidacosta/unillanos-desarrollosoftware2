import { Component, signal, output } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.component.html',
  styles: ``
})
export class CharacterAddComponent {
  name = signal('');
  power = signal(0);
  newCharacter:any = output<Character>();

  addCharacter(): void {
    if (!this.name() || !this.power() || this.power() < 0) {
      return;
    }

    const newCharacter: Character = {
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power(),
    };
    
    console.log('Adding character:', newCharacter);
    this.newCharacter.emit(newCharacter);
    this.resetFields();
  }

  resetFields(): void {
    this.name.set('');
    this.power.set(0);
  }
}