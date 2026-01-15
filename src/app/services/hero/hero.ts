import { Injectable } from '@angular/core';
import { Observable, of, timeout } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  images = [
    {
      itemImageSrc: '/images/utilities1.webp',
      thumbnailImageSrc: 'https://images.pexels.com/photos/34514019/pexels-photo-34514019.jpeg',
      alt: 'Description for Image 1',
      title: 'Title 1',
    },
    {
      itemImageSrc: '/images/utilities2.webp',
      thumbnailImageSrc: 'https://images.pexels.com/photos/31890371/pexels-photo-31890371.jpeg',
      alt: 'Description for Image 2',
      title: 'Title 2',
    },
    {
      itemImageSrc: '/images/utilities3.webp',
      thumbnailImageSrc: 'https://images.pexels.com/photos/34514019/pexels-photo-34514019.jpeg',
      alt: 'Description for Image 3',
      title: 'Title 3',
    },
    {
      itemImageSrc: '/images/utilities4.webp',
      thumbnailImageSrc: 'https://images.pexels.com/photos/34514019/pexels-photo-34514019.jpeg',
      alt: 'Description for Image 4',
      title: 'Title 4',
    },
  ];

  
  getImages() {
    return of(this.images).pipe(timeout(3000));
  }
}
