import { TestBed, inject } from '@angular/core/testing';

import { AniListQueryService } from './ani-list-query.service';

describe('AniListQueryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AniListQueryService]
    });
  });

  it('should be created', inject([AniListQueryService], (service: AniListQueryService) => {
    expect(service).toBeTruthy();
  }));
});
