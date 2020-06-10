import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapsuleUpcomingComponent } from './capsule-upcoming.component';

describe('CapsuleListComponent', () => {
  let component: CapsuleUpcomingComponent;
  let fixture: ComponentFixture<CapsuleUpcomingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapsuleUpcomingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapsuleUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
