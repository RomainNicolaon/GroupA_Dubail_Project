import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BraceletComponent } from './bracelet.component';

describe('BraceletComponent', () => {
  let component: BraceletComponent;
  let fixture: ComponentFixture<BraceletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BraceletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BraceletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
