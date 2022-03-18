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
  projects: project[] = [
    {
      id: '',
      title: '',
      projectImg: '',
      description: '',
      techs: [],
      urls: [],
    },
  ];
  constructor(private projectService: ProjectsService) {}

  ngOnInit(): void {
    try {
      this.projectService.getProjects().subscribe((projects: project[]) => {
        console.log(projects);
        this.projects = projects;
      });
    } catch (err) {
      console.log(err);
    }
  }
}
