import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerTestAttributeSelectorComponent } from './server-test-attribute-selector.component';

describe('ServerTestAttributeSelectorComponent', () => {
  let component: ServerTestAttributeSelectorComponent;
  let fixture: ComponentFixture<ServerTestAttributeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerTestAttributeSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerTestAttributeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
