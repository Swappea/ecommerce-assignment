/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CartInfoService } from './cart-info.service';

describe('Service: CartInfo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartInfoService]
    });
  });

  it('should ...', inject([CartInfoService], (service: CartInfoService) => {
    expect(service).toBeTruthy();
  }));
});
