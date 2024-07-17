import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveMapCardComponent } from './interactive-map-card.component';

describe('InteractiveMapCardComponent', () => {
  let component: InteractiveMapCardComponent;
  let fixture: ComponentFixture<InteractiveMapCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteractiveMapCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InteractiveMapCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
