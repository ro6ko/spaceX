import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapsulePastComponent } from './capsule-past.component';

describe('CapsuleListComponent', () => {
  let component: CapsulePastComponent;
  let fixture: ComponentFixture<CapsulePastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapsulePastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapsulePastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
