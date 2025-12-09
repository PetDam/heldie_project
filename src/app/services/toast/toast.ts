import { inject, Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class Toast {
  messageService = inject(MessageService);

  success(summary = 'Title', detail = 'Success!', life = 3000) {
    this.messageService.add({
      severity: 'success',
      summary,
      detail,
      life,
    });
  }

  info(life = 3000, summary = 'Info', detail = 'Note!') {
    this.messageService.add({
      severity: 'info',
      summary,
      detail,
      life,
    });
  }

  error(summary = 'Oops!', detail = 'Something went wrong!', life = 3000) {
    this.messageService.add({
      severity: 'error',
      summary,
      detail,
      life,
    });
  }
}
