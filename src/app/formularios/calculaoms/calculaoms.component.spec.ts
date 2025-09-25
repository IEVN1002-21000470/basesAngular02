import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculaomsComponent } from './calculaoms.component';

describe('CalculaomsComponent', () => {
  let component: CalculaomsComponent;
  let fixture: ComponentFixture<CalculaomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculaomsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculaomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
