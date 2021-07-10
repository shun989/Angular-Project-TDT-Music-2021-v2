import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTrackListComponent } from './user-track-list.component';

describe('UserTrackListComponent', () => {
  let component: UserTrackListComponent;
  let fixture: ComponentFixture<UserTrackListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTrackListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTrackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
