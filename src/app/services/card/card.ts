import { Injectable } from '@angular/core';
import { of, timeout } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Card {
  cards = [
    {
      img: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg',
      title: 'Advanced Card',
      subtitle: 'Subtitle',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      img: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg',
      title: 'Advanced Card',
      subtitle: 'Subtitle',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      img: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg',
      title: 'Advanced Card',
      subtitle: 'Subtitle',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      img: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg',
      title: 'Advanced Card',
      subtitle: 'Subtitle',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];
  getCards() {
    return of(this.cards).pipe(timeout(3000));
  }
}
