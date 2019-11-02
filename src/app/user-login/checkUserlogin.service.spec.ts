/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CheckUserloginService } from './checkUserlogin.service';

describe('Service: CheckUserlogin', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckUserloginService]
    });
  });

  it('should ...', inject([CheckUserloginService], (service: CheckUserloginService) => {
    expect(service).toBeTruthy();
  }));
});
