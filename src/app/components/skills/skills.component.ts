import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  @Input() size: number = 0;
  skills = [
    { title: 'Resilience', ability: 60 },
    { title: 'Empathy', ability: 60 },
    { title: 'Active listening', ability: 75 },
    { title: 'Proactive', ability: 60 },
    { title: 'Creativity', ability: 80 },
  ];
  languages = [
    { title: 'Español', ability: 100 },
    { title: 'English', ability: 80 },
    { title: '日本語 / Japanese', ability: 20 },
  ];
  ngOnInit(): void {}
}
