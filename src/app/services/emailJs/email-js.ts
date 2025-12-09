import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from '../../lib/config';

@Injectable({
  providedIn: 'root',
})
export class EmailJs {

  constructor() {
    emailjs.init(environment.emailJsPublicKey);
  }

  sendEmail(templateParams: any): Promise<EmailJSResponseStatus> {
    return emailjs.send(
      environment.emailJsServiceId,
      environment.emailJsTemplateId,
      templateParams
    );
  }
   sendAutoReplyEmail(data: any): Promise<EmailJSResponseStatus> {
    return emailjs.send(
      environment.emailJsServiceId,
      environment.emailJsTemplateIdAutoReply,
      data
    );
  }
}
