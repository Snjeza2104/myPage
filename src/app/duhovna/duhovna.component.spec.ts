import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuhovnaComponent } from './duhovna.component';

describe('DuhovnaComponent', () => {
  let component: DuhovnaComponent;
  let fixture: ComponentFixture<DuhovnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuhovnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuhovnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
