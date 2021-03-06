/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TitleInputComponent } from './title-input.component';

describe('TitleInputComponent', () => {
  let component: TitleInputComponent;
  let fixture: ComponentFixture<TitleInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
