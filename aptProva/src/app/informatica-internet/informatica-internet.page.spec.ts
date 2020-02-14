import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformaticaInternetPage } from './informatica-internet.page';

describe('InformaticaInternetPage', () => {
  let component: InformaticaInternetPage;
  let fixture: ComponentFixture<InformaticaInternetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformaticaInternetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformaticaInternetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
