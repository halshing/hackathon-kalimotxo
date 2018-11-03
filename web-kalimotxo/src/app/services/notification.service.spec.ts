import { TestBed } from '@angular/core/testing';
import { NotificationService } from './notification.service';
import { MessageService } from 'primeng/components/common/messageservice';

describe('NotificationService', () => {
  let service: NotificationService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificationService, MessageService],
    });
    service = TestBed.get(NotificationService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
