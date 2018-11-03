import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';

@Injectable()
export class NotificationService {
  constructor(private messageService: MessageService) {}

  displayError(err) {
    this.messageService.add({
      severity: 'error',
      summary: err.name,
      detail: err.message,
    });
  }

  displaySuccess(msg) {
    this.messageService.add({
      severity: 'success',
      summary: msg,
    });
  }
}
