import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Amcharts2Component } from './amcharts2.component';

describe('Amcharts2Component', () => {
  let component: Amcharts2Component;
  let fixture: ComponentFixture<Amcharts2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Amcharts2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Amcharts2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
