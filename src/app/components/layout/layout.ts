import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { RouterOutlet } from "@angular/router";
import { ToastModule } from "primeng/toast";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-layout',
  imports: [Navbar, RouterOutlet, ToastModule, Footer],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

}
