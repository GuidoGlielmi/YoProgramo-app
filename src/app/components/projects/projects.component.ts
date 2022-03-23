import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/service/projects/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: any[] = [];
  loggedIn = true;
  showNewForm = false;
  constructor(private projectService: ProjectsService) {}

  addProject(newProject: any) {
    /* this.projects.push(newProject); */
    console.log(newProject);
  }
  ngOnInit(): void {
    try {
      this.projectService.getProjects().subscribe((projects: any[]) => {
        this.projects = projects;
      });
    } catch (err) {
      console.log(err);
    }
  }
}
