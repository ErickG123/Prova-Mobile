import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesenvolvimentoSistemaPage } from './desenvolvimento-sistema.page';

describe('DesenvolvimentoSistemaPage', () => {
  let component: DesenvolvimentoSistemaPage;
  let fixture: ComponentFixture<DesenvolvimentoSistemaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesenvolvimentoSistemaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesenvolvimentoSistemaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
