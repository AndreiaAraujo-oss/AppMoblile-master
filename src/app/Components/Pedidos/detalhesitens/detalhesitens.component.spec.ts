/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DetalhesitensComponent } from './detalhesitens.component';

describe('DetalhesitensComponent', () => {
  let component: DetalhesitensComponent;
  let fixture: ComponentFixture<DetalhesitensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesitensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesitensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
