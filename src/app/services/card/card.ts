import { Injectable } from '@angular/core';
import { of, timeout } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Card {
  cards = [
    {
      img: 'https://soreinpower.com/cdn/shop/files/A6.png?v=1728661805&width=990',
      title: 'Advanced Card',
      subtitle: 'Subtitle',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      img: 'https://soreinpower.com/cdn/shop/files/A6.png?v=1728661805&width=990',
      title: 'Advanced Card',
      subtitle: 'Subtitle',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      img: 'https://soreinpower.com/cdn/shop/files/A6.png?v=1728661805&width=990',
      title: 'Advanced Card',
      subtitle: 'Subtitle',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      img: 'https://soreinpower.com/cdn/shop/files/A6.png?v=1728661805&width=990',
      title: 'Advanced Card',
      subtitle: 'Subtitle',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];
  getCards() {
    return of(this.cards).pipe(timeout(3000));
  }
}
