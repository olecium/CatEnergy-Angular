import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickProgramComponent } from './pick-program.component';

describe('PickProgramComponent', () => {
  let component: PickProgramComponent;
  let fixture: ComponentFixture<PickProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
