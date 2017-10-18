import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadyToWatchListComponent } from './ready-to-watch-list.component';

describe('ReadyToWatchListComponent', () => {
  let component: ReadyToWatchListComponent;
  let fixture: ComponentFixture<ReadyToWatchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadyToWatchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadyToWatchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
