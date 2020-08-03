import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EzypayHomeComponent } from './ezypay-home.component';

describe('EzypayHomeComponent', () => {
  let component: EzypayHomeComponent;
  let fixture: ComponentFixture<EzypayHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EzypayHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EzypayHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
