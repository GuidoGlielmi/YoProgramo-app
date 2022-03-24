import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { skills, SkillsService } from 'src/app/service/skills/skills.service';

@Component({
  selector: 'app-skills-form',
  templateUrl: './skills-form.component.html',
  styleUrls: ['./skills-form.component.css'],
})
export class SkillsFormComponent implements OnInit {
  @Input()
  skill: skills = {
    id: '',
    name: '',
    abilityPercentage: 0,
    type: '',
  };
  @Input()
  index!: number;
  @Input() isNewSkillItem = false;
  @Output() onAddSkill = new EventEmitter<any>();
  @Output() onSaveSkill = new EventEmitter<any>();
  nameClicked: boolean = false;
  abilityPercentageClicked: boolean = false;
  typeClicked: boolean = false;
  newSkill: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private skillService: SkillsService
  ) {
    this.newSkill = this.formBuilder.group({
      id: '',
      name: ['', [Validators.required]],
      abilityPercentage: ['', [Validators.required]],
      type: ['', [Validators.required]],
    });
  }
  addSkill() {
    this.skillService.postSkill(this.newSkill.value).subscribe((data) => {
      this.newSkill.get('id')?.setValue(data.data);
      this.onAddSkill.emit(this.newSkill.value);
    });
  }
  saveSkill() {
    this.skillService.putSkill(this.newSkill.value).subscribe(() => {
      this.onSaveSkill.emit({
        newSkill: this.newSkill.value,
        index: this.index,
      });
    });
  }
  ngOnInit(): void {
    this.newSkill.patchValue({
      id: this.skill.id,
      name: this.skill.name,
      abilityPercentage: this.skill.name,
      type: this.skill.name,
    });
  }
  get id() {
    return this.newSkill.get('id');
  }
  get name() {
    return this.newSkill.get('name');
  }
  get abilityPercentage() {
    return this.newSkill.get('abilityPercentage');
  }
  get type() {
    return this.newSkill.get('type');
  }
}
