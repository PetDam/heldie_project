export interface NavLink {
  class: string;
  text: string;
  routerLink: string;
  style: string;
}

const style = 'font-weight: 700';

export const links: NavLink[] = [
  {
    class: 'pi pi-home',
    text: 'Home',
    routerLink: '/',
    style,
  },
  {
    class: 'pi pi-briefcase',
    text: 'Services',
    routerLink: '/services',
    style,
  },
  {
    class: 'pi pi-info-circle',
    text: 'About',
    routerLink: '/about',
    style,
  },
  {
    class: 'pi pi-envelope',
    text: 'Contact',
    routerLink: '/contact',
    style,
  },
];
