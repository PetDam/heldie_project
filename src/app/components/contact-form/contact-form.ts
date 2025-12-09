import {
  Component,
  inject,
  signal,
  WritableSignal,
  ViewChild,
  effect,
  viewChild,
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { EmailJs } from '../../services/emailJs/email-js';
import { Toast } from '../../services/toast/toast';
import { automatedTitle, getCurrentDateTime } from '../../lib/helper';
import { RecaptchaModule } from 'ng-recaptcha-2';
import { Stepper as StepperComponent } from '../stepper/stepper';
import { NgxBorderBeamComponent } from '@omnedia/ngx-border-beam';
import { SkeletonModule } from 'primeng/skeleton';
import { Header } from '../header/header';
import { FieldsetModule } from 'primeng/fieldset';
import { AvatarModule } from 'primeng/avatar';

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

  nextStep() {
    const currentStep = this.value();
    if (currentStep < 3) {
      const newStep = currentStep + 1;
      this.value.set(newStep);
    }
  }

  prevStep() {
    const currentStep = this.value();
    if (currentStep > 1) {
      const newStep = currentStep - 1;
      this.value.set(newStep);
    }
  }

  resolvedRecaptcha(e: string | null) {
    this.gRecaptchaResponse.set(e);
  }

  onSubmit() {
    const time = getCurrentDateTime();
    this.contactForm.controls.time.setValue(time);

    const title = automatedTitle();
    this.contactForm.controls.title.setValue(title);

    const formData = { ...this.contactForm.value };

    if (!formData.coupon || formData.coupon.trim() === '') {
      formData.coupon = 'NO COUPON';
    }

    const formValueWithToken = {
      ...this.contactForm.value,
      'g-recaptcha-response': this.gRecaptchaResponse(),
    };

    this.toastService.info(1000, 'Info', 'The email is sent!');

    this.emailJsService
      .sendEmail(formValueWithToken)
      .then((response) => {
        this.toastService.success(
          'Success',
          'The email was sent successfully.',
          3000
        );
      })
      .catch((err) => {
        this.toastService.error(
          'Failed to send email',
          'Please try again',
          3000
        );
      });

    this.emailJsService.sendAutoReplyEmail({
      name: formData.name,
      title: formData.title,
      email: formData.email,
    });
  }

  onStepperChanged(e: number | undefined) {
    if (e !== undefined) {
      this.value.set(e);
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
