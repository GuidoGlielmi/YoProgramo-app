import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  @Input() size: number = 0;
  skills = [
    { title: 'tuvieja', ability: 80 },
    { title: 'tuvieja', ability: 60 },
    { title: 'tuvieja', ability: 75 },
    { title: 'tuvieja', ability: 25 },
    { title: 'tuvieja', ability: 10 },
  ];
  languages = [
    { title: 'Español', ability: 100 },
    { title: 'English', ability: 80 },
    { title: '日本語 / Japanese', ability: 25 },
  ];
  ngOnInit(): void {}
}
