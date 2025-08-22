import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordVerifyCodeComponent } from './forgot-password-verify-code.component';

describe('ForgotPasswordVerifyCodeComponent', () => {
  let component: ForgotPasswordVerifyCodeComponent;
  let fixture: ComponentFixture<ForgotPasswordVerifyCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgotPasswordVerifyCodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotPasswordVerifyCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
