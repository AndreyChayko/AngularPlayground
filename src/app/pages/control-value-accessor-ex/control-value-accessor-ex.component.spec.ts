import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlValueAccessorExComponent } from './control-value-accessor-ex.component';

describe('ControlValueAccessorExComponent', () => {
  let component: ControlValueAccessorExComponent;
  let fixture: ComponentFixture<ControlValueAccessorExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ControlValueAccessorExComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlValueAccessorExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
