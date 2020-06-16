import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlazbaComponent } from './glazba.component';

describe('GlazbaComponent', () => {
  let component: GlazbaComponent;
  let fixture: ComponentFixture<GlazbaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlazbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlazbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
