import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTplComponent } from './home-tpl.component';

describe('HomeTplComponent', () => {
  let component: HomeTplComponent;
  let fixture: ComponentFixture<HomeTplComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTplComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
