import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsinoIntegradoPage } from './ensino-integrado.page';

describe('EnsinoIntegradoPage', () => {
  let component: EnsinoIntegradoPage;
  let fixture: ComponentFixture<EnsinoIntegradoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnsinoIntegradoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnsinoIntegradoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
