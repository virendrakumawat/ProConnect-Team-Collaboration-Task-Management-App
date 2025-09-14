import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachHeaderComponent } from './each-header.component';

describe('EachHeaderComponent', () => {
  let component: EachHeaderComponent;
  let fixture: ComponentFixture<EachHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EachHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EachHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
