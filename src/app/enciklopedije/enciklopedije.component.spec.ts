import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnciklopedijeComponent } from './enciklopedije.component';

describe('EnciklopedijeComponent', () => {
  let component: EnciklopedijeComponent;
  let fixture: ComponentFixture<EnciklopedijeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnciklopedijeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnciklopedijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
