import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ProjectsService } from 'src/app/service/projects/projects.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Input() inputsObject: any;
  formData: any[] = [];
  inputsForm!: FormGroup;
  @Input()
  index!: number;
  constructor(
    private formBuilder: FormBuilder,
    private projectService: ProjectsService
  ) {}

  ngOnInit(): void {
    const form: any = {};
    let index = 0;
    for (let input in this.inputsObject) {
      if (
        typeof this.inputsObject[input] === 'string' ||
        typeof this.inputsObject[input] === 'number' ||
        typeof this.inputsObject[input] === 'boolean'
      ) {
        this.formData.push({
          key: input,
          clicked: false,
        });
        form[this.formData[index].key] = new FormControl(
          '',
          Validators.required
        );
        // a type 'any' object must be used
        form[this.formData[index].key].patchValue(this.inputsObject[input]);
        index++;
      }
    }
    this.inputsForm = new FormGroup(form);
  }
  onSubmit() {
    console.log(this.inputsForm.value);
  }
  typeOf(element: any) {
    return typeof element;
  }
}
