import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { links } from './navlinks.config';
import { Sidebarz } from '../sidebar/sidebar';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, Sidebarz],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isMenuOpen = false;
  navlinks = links;
  
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
