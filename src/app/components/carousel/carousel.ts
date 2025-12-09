import { Component, input } from '@angular/core';
import { Carousel } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { Tag } from 'primeng/tag';
import { Header } from '../header/header';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [Carousel, ButtonModule, Tag, Header],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class CarouselComponent {
  products = [
    {
      img: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg',
      title: 'Advanced Card',
      subtitle: 'Subtitle',
      text: 'Lorem ipsum dolor sit amet.',
    },
    {
      img: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg',
      title: 'Advanced Card',
      subtitle: 'Subtitle',
      text: 'Lorem ipsum dolor sit amet.',
    },
    {
      img: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg',
      title: 'Advanced Card',
      subtitle: 'Subtitle',
      text: 'Lorem ipsum dolor sit amet.',
    },
    {
      img: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg',
      title: 'Advanced Card',
      subtitle: 'Subtitle',
      text: 'Lorem ipsum dolor sit amet.',
    },
  ];

  responsiveOptions = [
    { breakpoint: '1400px', numVisible: 2, numScroll: 1 },
    { breakpoint: '1199px', numVisible: 3, numScroll: 1 },
    { breakpoint: '767px', numVisible: 2, numScroll: 1 },
    { breakpoint: '575px', numVisible: 1, numScroll: 1 },
  ];

  constructor() {
    this.products = this.products.map((product, index) => ({
      ...product,
      index: index + 1,
    }));
    console.log(this.products);
  }
}
