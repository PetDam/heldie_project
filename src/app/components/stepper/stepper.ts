import { Component, input, model, output } from '@angular/core';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [StepperModule, ButtonModule, InputTextModule, CommonModule],
  templateUrl: './stepper.html',
  styleUrl: './stepper.css',
})
export class Stepper {
  detailsFormInvalid = input<boolean>(true);
  orderDetailsFormInvalid = input<boolean>(true);
  value = model<number>(1);

  onStepChange(event: number | undefined) {
    if (event !== undefined) {
      this.value.set(event);
    }
  }

  goToStep(step: number) {
    this.value.set(step);
  }
}
