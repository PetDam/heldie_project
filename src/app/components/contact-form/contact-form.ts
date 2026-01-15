import { Component, inject, signal, WritableSignal } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
  ReactiveFormsModule,
} from '@angular/forms';
import { EmailJs } from '../../services/emailJs/email-js';
import { Toast } from '../../services/toast/toast';
import { RecaptchaModule } from 'ng-recaptcha-2';
import { Stepper as StepperComponent } from '../stepper/stepper';
import { NgxBorderBeamComponent } from '@omnedia/ngx-border-beam';
import { SkeletonModule } from 'primeng/skeleton';
import { Header } from '../header/header';
import { FieldsetModule } from 'primeng/fieldset';
import { AvatarModule } from 'primeng/avatar';
import { automatedTitle, getCurrentDateTime } from '../../lib/helper';

export function phoneValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) return null;
    const phoneRegex = /^(\+30)?\s?69\d{8}$/;
    return phoneRegex.test(value) ? null : { invalidPhone: true };
  };
}

@Component({
  selector: 'app-contact-form',
  imports: [
    ReactiveFormsModule,
    RecaptchaModule,
    StepperComponent,
    NgxBorderBeamComponent,
    SkeletonModule,
    Header,
    FieldsetModule,
    AvatarModule,
  ],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
})
export class ContactForm {
  emailJsService = inject(EmailJs);
  toastService = inject(Toast);

  contactForm = new FormGroup({
    title: new FormControl(''),
    name: new FormControl('', Validators.required),
    time: new FormControl(''),
    message: new FormControl('', Validators.required),
    coupon: new FormControl(''),
    mobile: new FormControl('', [Validators.required, phoneValidator()]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  siteKey = '6Le1PhQsAAAAAJM4zXC4gE7qy7zino7aGdrfFrdE';
  gRecaptchaResponse: WritableSignal<string | null> = signal(null);

  value = signal<number>(1);

  detailsFormInvalid = false;
  orderDetailsFormInvalid = false;

  constructor() {
    // Ενημέρωση των invalid flags
    this.contactForm.valueChanges.subscribe(() => {
      this.detailsFormInvalid =
        this.contactForm.get('name')?.invalid ||
        this.contactForm.get('email')?.invalid ||
        this.contactForm.get('mobile')?.invalid ||
        false;

      this.orderDetailsFormInvalid = this.contactForm.get('message')?.invalid || false;
    });
  }

  nextStep() {
    const currentStep = this.value();
    if (currentStep < 3) this.value.set(currentStep + 1);
  }

  prevStep() {
    const currentStep = this.value();
    if (currentStep > 1) this.value.set(currentStep - 1);
  }

  resolvedRecaptcha(token: string | null) {
    console.log('reCAPTCHA token:', token);
    this.gRecaptchaResponse.set(token);
  }

  async onSubmit() {
    if (!this.gRecaptchaResponse()) {
      this.toastService.error('Please complete the reCAPTCHA');
      return;
    }

    const time = getCurrentDateTime();
    this.contactForm.controls.time.setValue(time);
    this.contactForm.controls.title.setValue(automatedTitle());

    const formValueWithToken = {
      ...this.contactForm.value,
      'g-recaptcha-response': this.gRecaptchaResponse(),
    };

    try {
      await this.emailJsService.sendEmail(formValueWithToken);
      this.toastService.success('Success', 'The email was sent successfully', 3000);

      // Αυτόματο auto-reply
      await this.emailJsService.sendAutoReplyEmail({
        name: this.contactForm.value.name,
        title: this.contactForm.value.title,
        email: this.contactForm.value.email,
      });
    } catch (err) {
      console.error(err);
      this.toastService.error('Failed to send email', 'Please try again', 3000);
    }
  }

  getTitle(step: number) {
    switch (step) {
      case 1:
        return { icon: 'pi pi-id-card', text: 'Details' };
      case 2:
        return { icon: 'pi pi-briefcase', text: 'Order Details' };
      case 3:
        return { icon: 'pi pi-shield', text: 'Authentication' };
      default:
        return { icon: 'pi pi-envelope', text: 'Contact' };
    }
  }
}
