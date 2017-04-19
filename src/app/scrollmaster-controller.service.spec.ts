import { TestBed, inject } from '@angular/core/testing';

import { ScrollmasterControllerService } from './scrollmaster-controller.service';

describe('ScrollmasterControllerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScrollmasterControllerService]
    });
  });

  it('should ...', inject([ScrollmasterControllerService], (service: ScrollmasterControllerService) => {
    expect(service).toBeTruthy();
  }));
});
