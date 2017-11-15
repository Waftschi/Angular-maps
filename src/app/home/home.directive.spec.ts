import { HomeDirective } from './home.directive';
import { ElementRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';

export class MockElementRef extends ElementRef {}

describe('HomeDirective', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HomeDirective],
            providers: [MockElementRef]
        });
    });

  // it('should create an instance', () => {
  //   const directive = new HomeDirective();
  //   expect(directive).toBeTruthy();
  // });
});
