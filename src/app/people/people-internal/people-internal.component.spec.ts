import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleInternalComponent } from './people-internal.component';

describe('PeopleInternalComponent', () => {
  let component: PeopleInternalComponent;
  let fixture: ComponentFixture<PeopleInternalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleInternalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleInternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
