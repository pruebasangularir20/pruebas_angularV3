import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasqlComponent } from './datasql.component';

describe('DatasqlComponent', () => {
  let component: DatasqlComponent;
  let fixture: ComponentFixture<DatasqlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatasqlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
