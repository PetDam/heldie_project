import { Component, inject, model } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Card } from '../../services/card/card';
import { take } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CardButton } from '../card-button/card-button';
import { Header } from '../header/header';

export interface CardModel {
  img: string;
  title: string;
  subtitle: string;
  text: string;
}

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CardModule, ButtonModule, CommonModule, CardButton, Header],
  templateUrl: './cards.html',
  styleUrl: './cards.css',
})
export class Cards {
  private cardService = inject(Card);
  cards = model<CardModel[]>([]);

  ngOnInit(): void {
    this.cardService
      .getCards()
      .pipe(take(1))
      .subscribe((cards) => {
        this.cards.set(cards as any);
      });
  }
}
