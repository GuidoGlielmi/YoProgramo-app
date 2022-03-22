import { Component, Input, OnInit } from '@angular/core';
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
  constructor(private skillService: SkillsService) {}

  ngOnInit(): void {
    try {
      this.skillService.getSkills().subscribe((skills: skills[]) => {
        for (let skill of skills) {
          if (skill.type === 'language') this.languages.push(skill);
          else this.skills.push(skill);
        }
      });
    } catch (err) {
      console.log(err);
    }
  }
}
