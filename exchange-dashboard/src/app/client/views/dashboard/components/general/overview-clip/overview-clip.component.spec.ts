import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewClipComponent } from './overview-clip.component';

describe('OverviewClipComponent', () => {
  let component: OverviewClipComponent;
  let fixture: ComponentFixture<OverviewClipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverviewClipComponent]
    });
    fixture = TestBed.createComponent(OverviewClipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
