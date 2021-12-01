import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BijouxComponent } from './bijoux.component';

describe('BijouxComponent', () => {
  let component: BijouxComponent;
  let fixture: ComponentFixture<BijouxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BijouxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BijouxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
