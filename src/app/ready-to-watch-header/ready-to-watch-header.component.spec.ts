import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadyToWatchHeaderComponent } from './ready-to-watch-header.component';

describe('ReadyToWatchHeaderComponent', () => {
  let component: ReadyToWatchHeaderComponent;
  let fixture: ComponentFixture<ReadyToWatchHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadyToWatchHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadyToWatchHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
