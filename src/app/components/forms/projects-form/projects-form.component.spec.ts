import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsFormComponent } from './projects-form.component';

describe('ProjectsComponent', () => {
  let component: ProjectsFormComponent;
  let fixture: ComponentFixture<ProjectsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectsFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
