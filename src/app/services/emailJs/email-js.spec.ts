import { TestBed } from '@angular/core/testing';

import { EmailJs } from './email-js';

describe('EmailJs', () => {
  let service: EmailJs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailJs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
