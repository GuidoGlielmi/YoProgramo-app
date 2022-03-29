import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';
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
  constructor(
    private projectService: ProjectsService,
    private authService: AuthService
  ) {
    authService.isLoggedListener().subscribe((isLogged) => {
      this.loggedIn = isLogged;
      this.showForm = [];
      this.showNewForm = false;
      this.showNewForm = false;
    });
    this.projectService.getProjects().subscribe((projects: any[]) => {
      this.projects = projects;
    });
  }

  addProject(newProject: project) {
    this.projects.push(newProject);
    this.projects.sort((a, b) => a.title.localeCompare(b.title));
  }
  saveProject(newProject: project, i: number) {
    this.projects[i] = newProject;
  }
  deleteProject(index: number) {
    this.projectService
      .deleteProject(this.projects[index].id)
      .subscribe(() => this.projects.splice(index, 1));
  }
  ngOnInit(): void {}
}
