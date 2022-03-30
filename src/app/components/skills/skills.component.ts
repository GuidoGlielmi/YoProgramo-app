import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';
import { skills, SkillsService } from 'src/app/service/skills/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  @Input() size: number = 0;
  skillsAndLanguages: skills[] = [];
  skillTypes: string[] = [];
  loggedIn = true;
  showNewForm = false;
  showForm: boolean[] = [];
  isLoading = true;
  constructor(
    private skillService: SkillsService,
    private authService: AuthService
  ) {
    authService.isLoggedListener().subscribe((isLogged) => {
      this.loggedIn = isLogged;
      this.showForm = [];
      this.showNewForm = false;
    });
  }

  ngOnInit(): void {
    this.skillService.getSkills().subscribe((skills: skills[]) => {
      //this.isLoading = false;
      this.skillsAndLanguages = skills;
      for (const skill of skills) {
        if (!this.skillTypes.includes(skill.type)) {
          this.skillTypes.push(skill.type);
        }
      }
    });
  }
  addSkillOrLanguage(skillOrLanguage: skills) {
    this.skillsAndLanguages.push(skillOrLanguage);
    this.skillsAndLanguages.sort((a, b) => a.name.localeCompare(b.name));
  }
  saveSkillOrLanguage(skillOrLanguage: skills, i: number) {
    // it has to have the same property names as the emitted object in the html
    this.skillsAndLanguages[i] = skillOrLanguage;
  }
  deleteSkillOrLanguage(i: number) {
    this.skillService
      .deleteSkill(this.skillsAndLanguages[i].id)
      .subscribe(() => {
        this.skillsAndLanguages.splice(i, 1);
      });
  }
}
