import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPitcherComponent } from './select-pitcher.component';

describe('SelectPitcherComponent', () => {
  let component: SelectPitcherComponent;
  let fixture: ComponentFixture<SelectPitcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectPitcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
