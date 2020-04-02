/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DelayService } from './delay.service';

describe('Service: Delay', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DelayService]
    });
  });

  it('should ...', inject([DelayService], (service: DelayService) => {
    expect(service).toBeTruthy();
  }));
});
