import { Component } from '@angular/core';
import { getCurrentDate } from '../../lib/helper';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  year = getCurrentDate('y');
}
