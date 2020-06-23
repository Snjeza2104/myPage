import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrucnaComponent } from './strucna.component';

describe('StrucnaComponent', () => {
  let component: StrucnaComponent;
  let fixture: ComponentFixture<StrucnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrucnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrucnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
