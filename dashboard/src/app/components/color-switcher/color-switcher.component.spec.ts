import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorSwitcherComponent } from './color-switcher.component';

describe('ColorSwitcherComponent', () => {
  let component: ColorSwitcherComponent;
  let fixture: ComponentFixture<ColorSwitcherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorSwitcherComponent]
    });
    fixture = TestBed.createComponent(ColorSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
