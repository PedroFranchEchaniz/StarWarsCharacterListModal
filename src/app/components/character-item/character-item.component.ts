import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from 'src/app/models/character-list.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-character-item',
  templateUrl: './character-item.component.html',
  styleUrls: ['./character-item.component.css']
})
export class CharacterItemComponent {
  @Input() character!: Character;
  @Output() characterClick = new EventEmitter<String>();


  getCharacterImage() {
    const characterId = this.character.url.split('/')[5];
    return `https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`;
  }

  constructor(private modalService: NgbModal) { }

  ocharacterClick(modal: any) {
    this.modalService.open(modal,
      {
        keyboard: false,
        scrollable: true
      })
  }
}


