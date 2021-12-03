import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMetalComponent } from './custom-metal.component';

describe('CustomMetalComponent', () => {
  let component: CustomMetalComponent;
  let fixture: ComponentFixture<CustomMetalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomMetalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomMetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
