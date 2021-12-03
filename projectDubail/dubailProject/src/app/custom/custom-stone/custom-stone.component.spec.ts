import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomStoneComponent } from './custom-stone.component';

describe('CustomStoneComponent', () => {
  let component: CustomStoneComponent;
  let fixture: ComponentFixture<CustomStoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomStoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomStoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
