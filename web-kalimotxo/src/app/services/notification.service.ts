import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';

@Injectable()
export class NotificationService {
  constructor(private messageService: MessageService) {}

  /**
   *
   *
   * @param {Error} err
   * @param {name:string,message:string} err
   * @memberof NotificationService
   */
  displayError(err: Error) {
    this.messageService.add({
      severity: 'error',
      summary: err.name,
      detail: err.message,
    });
  }

  /**
   *
   *
   * @param {String} msg
   * @memberof NotificationService
   */
  displaySuccess(msg) {
    this.messageService.add({
      severity: 'success',
      summary: msg,
    });
  }
}

interface Error {
  name;
  message;
}
