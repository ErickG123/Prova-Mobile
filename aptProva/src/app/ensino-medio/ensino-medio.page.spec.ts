import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsinoMedioPage } from './ensino-medio.page';

describe('EnsinoMedioPage', () => {
  let component: EnsinoMedioPage;
  let fixture: ComponentFixture<EnsinoMedioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnsinoMedioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnsinoMedioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
