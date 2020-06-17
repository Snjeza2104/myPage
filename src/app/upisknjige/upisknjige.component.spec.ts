import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpisknjigeComponent } from './upisknjige.component';

describe('UpisknjigeComponent', () => {
  let component: UpisknjigeComponent;
  let fixture: ComponentFixture<UpisknjigeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpisknjigeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpisknjigeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
