import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tech, TechsService } from 'src/app/service/techs/techs.service';

@Component({
  selector: 'app-techs-form',
  templateUrl: './techs-form.component.html',
  styleUrls: ['./techs-form.component.css'],
})
export class TechsFormComponent implements OnInit {
  @Input() tech: tech = {
    id: '',
    name: '',
    techImg: '',
  };
  @Input()
  index!: number;
  @Output() onAddTech = new EventEmitter<any>();
  @Output() onSaveTech = new EventEmitter<any>();
  @Input() isNewTechItem = false;
  nameClicked: boolean = false;
  techImgClicked: boolean = false;
  newTechItem: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private techService: TechsService
  ) {
    this.newTechItem = this.formBuilder.group({
      id: '',
      name: ['', [Validators.required]],
      techImg: ['', [Validators.required]],
    });
  }
  addTech() {
    this.techService.postTech(this.newTechItem.value).subscribe((data) => {
      this.newTechItem.get('id')?.setValue(data.data);
      this.onAddTech.emit(this.newTechItem.value);
      this.techService.updateTech(this.newTechItem.value);
      this.newTechItem.reset();
    });
  }
  saveTech() {
    this.techService.putTech(this.newTechItem.value).subscribe(() => {
      this.onSaveTech.emit({
        newTech: this.newTechItem.value,
        index: this.index,
      });
    });
  }
  ngOnInit(): void {
    this.newTechItem.patchValue({
      id: this.tech.id,
      name: this.tech.name,
      techImg: this.tech.techImg,
    });
  }
  get name() {
    return this.newTechItem.get('name');
  }
  get techImg() {
    return this.newTechItem.get('techImg');
  }
}
