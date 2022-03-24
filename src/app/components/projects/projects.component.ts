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
  constructor(private projectService: ProjectsService) {}

  addProject(newProject: project) {
    this.projects.push(newProject);
  }
  saveProject(newProject: { newProject: project; index: number }) {
    this.projects[newProject.index] = newProject.newProject;
  }
  deleteProject(index: number) {
    this.projects.splice(index, 1);
  }
  ngOnInit(): void {
    this.projectService.getProjects().subscribe((projects: any[]) => {
      this.projects = projects;
      for (const element of projects) {
        this.showForm.push(false);
      }
    });
  }
}
