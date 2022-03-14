import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from 'src/app/interfaces/personaje';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() personaje!: Personaje;

  constructor() { }

  ngOnInit(): void {
  }

}
