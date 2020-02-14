import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosTecnicosPage } from './cursos-tecnicos.page';

describe('CursosTecnicosPage', () => {
  let component: CursosTecnicosPage;
  let fixture: ComponentFixture<CursosTecnicosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosTecnicosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosTecnicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
