import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomEngraveComponent } from './custom-engrave.component';

describe('CustomEngraveComponent', () => {
  let component: CustomEngraveComponent;
  let fixture: ComponentFixture<CustomEngraveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomEngraveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomEngraveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
