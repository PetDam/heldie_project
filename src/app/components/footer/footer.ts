import { Component } from '@angular/core';
import { getCurrentDate } from '../../lib/helper';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
year = getCurrentDate("y");
}
