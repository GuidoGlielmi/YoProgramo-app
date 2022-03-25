import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  ProjectsService,
  projectUrls,
} from 'src/app/service/projects/projects.service';
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
  @Output() onAddProject = new EventEmitter<any>();
  @Output() onSaveProject = new EventEmitter<any>();
  @Input()
  index!: number;
  @Input() isNewProjectItem = false;
  techs: tech[] = [];
  remainingTechs: tech[] = [];
  titleClicked: boolean = false;
  descriptionClicked: boolean = false;
  projectImgClicked: boolean = false;
  newProject!: FormGroup;
  newUrl: projectUrls = {
    id: '',
    projectId: '',
    name: '',
    url: '',
  };
  newUrlClicked: boolean = false;
  newUrlNameClicked: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private projectService: ProjectsService,
    private techService: TechsService
  ) {}
  addProject() {
    let techs = this.project.techs.map((tech: tech) => tech.id);
    let newProject = {
      project: { ...this.project, ...this.newProject.value },
      techs,
    };
    this.projectService.addProject(newProject).subscribe((data) => {
      this.onAddProject.emit(data.data);
      this.newUrl = {
        id: '',
        projectId: '',
        name: '',
        url: '',
      };
      this.newProject.reset();
    });
  }

  saveProject() {
    let techs = this.project.techs.map((tech: tech) => tech.id);

    let newProject = {
      project: { ...this.project, ...this.newProject.value },
      techs,
    };

    this.projectService.putProject(newProject).subscribe(() => {
      this.onSaveProject.emit({ ...this.project, ...this.newProject.value });
    });
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
  }
  deleteUrl(selectedUrlIndex: number) {
    let selectedUrlId = this.urlsGroup.controls[selectedUrlIndex].value.id;
    this.urlsGroup.removeAt(selectedUrlIndex);
  }
  addTechToProject(newTech: tech) {
    this.project.techs.push(newTech);
    this.remainingTechs = this.remainingTechs.filter(
      (tech) => tech.id !== newTech.id
    );
    console.log(this.project);
  }
  deleteTechFromProject(tech: tech) {
    this.project.techs = this.project.techs.filter(
      (projectTech: tech) => tech.id !== projectTech.id
    );
    this.remainingTechs.push(tech);
  }
  setProjectForm() {
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

  ngOnInit(): void {
    this.techService.watchTechUpdate().subscribe((techs) => {
      if (techs) {
        console.log(techs);

        if (techs instanceof Array) {
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
        } else this.remainingTechs.push(techs);
      }
    });
    this.setProjectForm();
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
