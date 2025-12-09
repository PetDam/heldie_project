import { Component, model, ViewChild } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { Drawer } from 'primeng/drawer';
import { links } from '../navbar/navlinks.config';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [DrawerModule, ButtonModule, Ripple, AvatarModule, RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  @ViewChild('drawerRef') drawerRef!: Drawer;

  navlinks = links;

  closeCallback(e: any): void {
    this.drawerRef.close(e);
  }

  visible = model<boolean>(false);
}
