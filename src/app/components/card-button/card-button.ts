import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { SplitButtonModule, SplitButton } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-card-button',
  imports: [ToastModule, SplitButton],
  templateUrl: './card-button.html',
  styleUrl: './card-button.css',
})
export class CardButton {
 
}
