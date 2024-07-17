import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveMapWrapperComponent } from './interactive-map-wrapper.component';

describe('InteractiveMapWrapperComponent', () => {
  let component: InteractiveMapWrapperComponent;
  let fixture: ComponentFixture<InteractiveMapWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteractiveMapWrapperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InteractiveMapWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
