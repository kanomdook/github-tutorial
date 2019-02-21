import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficImpactComponent } from './traffic-impact.component';

describe('TrafficImpactComponent', () => {
  let component: TrafficImpactComponent;
  let fixture: ComponentFixture<TrafficImpactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrafficImpactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafficImpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
