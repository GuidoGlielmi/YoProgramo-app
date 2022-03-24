import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { skills, SkillsService } from 'src/app/service/skills/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  @Input() size: number = 0;
  skills: skills[] = [];
  languages: skills[] = [];
  loggedIn = true;
  showNewForm = false;
  showSkillForm: boolean[] = [];
  showLanguageForm: boolean[] = [];
  constructor(private skillService: SkillsService) {}

  ngOnInit(): void {
    this.skillService.getSkills().subscribe((skills: skills[]) => {
      for (let skill of skills) {
        if (skill.type === 'language') {
          this.languages.push(skill);
          this.showSkillForm.push(false);
        } else {
          this.skills.push(skill);
          this.showLanguageForm.push(false);
        }
      }
    });
  }
  addSkillOrLanguage(skillOrLanguage: skills) {
    if (skillOrLanguage.type === 'skill') this.skills.push(skillOrLanguage);
    else this.languages.push(skillOrLanguage);
  }
  saveSkillOrLanguage(newItem: { skillOrLanguage: skills; i: number }) {
    if (newItem.skillOrLanguage.type === 'skill')
      this.skills[newItem.i] = newItem.skillOrLanguage;
    else this.skills[newItem.i] = newItem.skillOrLanguage;
  }
  deleteSkillOrLanguage(skillOrLanguage: skills, i: number) {
    if (skillOrLanguage.type === 'skill') this.skills.splice(i, 1);
    else this.languages.splice(i, 1);
  }
}
