import { Component, input } from '@angular/core';
import { NgxShinyTextComponent } from '@omnedia/ngx-shiny-text';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgxShinyTextComponent],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  title = input<string>('Title');
  subtitle = input<string>('Subtitle');
}
