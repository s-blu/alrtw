import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeEntryComponent } from './anime-entry.component';

describe('AnimeEntryComponent', () => {
  let component: AnimeEntryComponent;
  let fixture: ComponentFixture<AnimeEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimeEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
