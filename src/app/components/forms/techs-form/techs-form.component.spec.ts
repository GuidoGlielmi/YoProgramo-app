import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechsFormComponent } from './techs-form.component';

describe('TechsFormComponent', () => {
  let component: TechsFormComponent;
  let fixture: ComponentFixture<TechsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
