import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoumComponent } from './soum.component';

describe('SoumComponent', () => {
  let component: SoumComponent;
  let fixture: ComponentFixture<SoumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
