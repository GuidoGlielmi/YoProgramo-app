import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProjectsService } from 'src/app/service/projects/projects.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TechsService, tech } from 'src/app/service/techs/techs.service';
@Component({
  selector: 'app-projects-form',
  templateUrl: './projects-form.component.html',
  styleUrls: ['./projects-form.component.css'],
})
export class ProjectsFormComponent implements OnInit {
  @Input()
  project: any = {
    id: '',
    title: '',
    description: '',
    projectImg: '',
    urls: [],
    techs: [],
  };
  @Input() new = false;
  @Output() onAddProject = new EventEmitter<any>();
  @Input()
  index!: number;
  techs: tech[] = [];
  remainingTechs: tech[] = [];
  titleClicked: boolean = false;
  descriptionClicked: boolean = false;
  projectImgClicked: boolean = false;
  newProject!: FormGroup;
  newUrl: any = {
    projectId: '',
    name: '',
    url: '',
  };
  constructor(
    private formBuilder: FormBuilder,
    private projectService: ProjectsService,
    private techService: TechsService
  ) {
    try {
      this.techService.getTechs().subscribe((techs: tech[]) => {
        this.techs = techs;
        for (const tech of techs) {
          if (
            !this.project.techs.find(
              (projectTech: tech) => tech.id === projectTech.id
            )
          ) {
            this.remainingTechs.push(tech);
          }
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

  saveProject() {
    let techs = this.project.techs.map((tech: tech) => tech.id);
    let newProject = {
      project: { ...this.project, ...this.newProject.value },
      techs,
    };
    console.log(newProject);
    this.projectService.putProject(newProject).subscribe({
      next: (asd) => console.log('Completed'),
      error: (error) => console.log(error),
    });
    if (this.new) {
      this.onAddProject.emit({ ...this.project, ...this.newProject.value });
    }
  }
  addUrl() {
    const newUrlFormGroup = this.formBuilder.group({
      url: [this.newUrl.url, [Validators.required]],
      name: [this.newUrl.name, [Validators.required]],
      projectId: [this.project.id, [Validators.required]],
    });
    this.urlsGroup.push(newUrlFormGroup);
    const newUrl = {
      ...this.newUrl,
      projectId: this.project.id,
    };
    this.projectService
      .addUrlToProject(newUrl)
      .subscribe(() => console.log('Completed'));
  }
  deleteUrl(selectedUrlIndex: number) {
    let selectedUrlId = this.urlsGroup.controls[selectedUrlIndex].value.id;
    this.urlsGroup.removeAt(selectedUrlIndex);
    this.projectService
      .deleteUrlFromProject(selectedUrlId)
      .subscribe(() => console.log('Completed'));
  }
  addTechToProject(newTech: tech) {
    this.project.techs.push(newTech);
    this.remainingTechs = this.remainingTechs.filter(
      (tech) => tech.id !== newTech.id
    );
    this.projectService
      .addTechToProject(newTech.id, this.project.id)
      .subscribe(() => console.log('Completed'));
  }
  deleteTechFromProject(tech: tech) {
    this.project.techs = this.project.techs.filter(
      (projectTech: tech) => tech.id !== projectTech.id
    );
    this.project.techs.filter(
      (projectTech: tech) => tech.id !== projectTech.id
    );
    this.remainingTechs.push(tech);
    this.projectService
      .deleteTechFromProject(tech.id, this.project.id)
      .subscribe(() => console.log('Completed'));
  }
  ngOnInit(): void {
    this.newProject = this.formBuilder.group({
      id: [this.project.id],
      title: [this.project.title, [Validators.required]],
      description: [this.project.description, [Validators.required]],
      projectImg: [this.project.projectImg, [Validators.required]],
      urls: new FormArray([]),
    });
    this.project.urls.forEach((url: any) => {
      const newUrl = this.formBuilder.group({
        id: [url.id],
        url: [url.url, [Validators.required]],
        name: [url.name, [Validators.required]],
        projectId: [url.projectId, [Validators.required]],
      });
      this.urlsGroup.push(newUrl);
    });
  }
  get title() {
    return this.newProject.get('title');
  }
  get description() {
    return this.newProject.get('description');
  }
  get projectImg() {
    return this.newProject.get('projectImg');
  }
  get urlsGroup() {
    return this.newProject.get('urls') as FormArray;
  }
}
