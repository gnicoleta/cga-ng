import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Asgmnt2Component } from './asgmnt2.component';

describe('Asgmnt2Component', () => {
  let component: Asgmnt2Component;
  let fixture: ComponentFixture<Asgmnt2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Asgmnt2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Asgmnt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
