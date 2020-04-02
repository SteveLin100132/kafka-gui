/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ElectronWindowService } from './electron-window.service';

describe('Service: ElectronWindow', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElectronWindowService]
    });
  });

  it('should ...', inject([ElectronWindowService], (service: ElectronWindowService) => {
    expect(service).toBeTruthy();
  }));
});
