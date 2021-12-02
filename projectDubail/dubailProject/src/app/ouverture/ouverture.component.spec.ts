import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuvertureComponent } from './ouverture.component';

describe('OuvertureComponent', () => {
  let component: OuvertureComponent;
  let fixture: ComponentFixture<OuvertureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OuvertureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OuvertureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
