import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectionTokenExComponent } from './injection-token-ex.component';

describe('InjectionTokenExComponent', () => {
  let component: InjectionTokenExComponent;
  let fixture: ComponentFixture<InjectionTokenExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InjectionTokenExComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectionTokenExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
