import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBatterComponent } from './select-batter.component';

describe('SelectBatterComponent', () => {
  let component: SelectBatterComponent;
  let fixture: ComponentFixture<SelectBatterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectBatterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectBatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
