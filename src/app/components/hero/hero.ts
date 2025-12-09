import { Component, inject, model, OnInit } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { HeroService } from '../../services/hero/hero';
import { take } from 'rxjs';

@Component({
  selector: 'app-hero',
  imports: [GalleriaModule],
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements OnInit {
  private heroService = inject(HeroService);
  images = model([]);
  
  ngOnInit(): void {
    this.heroService
      .getImages()
      .pipe(take(1))
      .subscribe((images) => {
        this.images.set(images as any);
      });
  }
}
