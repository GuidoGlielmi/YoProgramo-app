import { Component, OnInit } from '@angular/core';
import {
  project,
  ProjectsService,
} from 'src/app/service/projects/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: any[] = [];
  loggedIn = true;
  showNewForm = false;
  showForm: boolean[] = [];
  constructor(private projectService: ProjectsService) {
    this.projectService.getProjects().subscribe((projects: any[]) => {
      this.projects = projects;
    });
  }

  addProject(newProject: project) {
    this.projects.push(newProject);
    this.projects.sort((a, b) => a.title.localeCompare(b.title));
  }
  saveProject(newProject: { newProject: project; index: number }) {
    this.projects[newProject.index] = newProject.newProject;
  }
  deleteProject(index: number) {
    this.projectService
      .deleteProject(this.projects[index].id)
      .subscribe(() => this.projects.splice(index, 1));
  }
  ngOnInit(): void {}
}
