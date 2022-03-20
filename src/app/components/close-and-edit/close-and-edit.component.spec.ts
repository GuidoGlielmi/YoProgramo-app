import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseAndEditComponent } from './close-and-edit.component';

describe('CloseAndEditComponent', () => {
  let component: CloseAndEditComponent;
  let fixture: ComponentFixture<CloseAndEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloseAndEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseAndEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
