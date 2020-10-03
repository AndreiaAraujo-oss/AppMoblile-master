/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AtualizarComponent } from './atualizar.component';

describe('AtualizarComponent', () => {
  let component: AtualizarComponent;
  let fixture: ComponentFixture<AtualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
