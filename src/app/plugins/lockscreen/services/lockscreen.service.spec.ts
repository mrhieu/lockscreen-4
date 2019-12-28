import { TestBed } from '@angular/core/testing';

import { LockscreenService } from './lockscreen.service';

describe('LockscreenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LockscreenService = TestBed.get(LockscreenService);
    expect(service).toBeTruthy();
  });
});
