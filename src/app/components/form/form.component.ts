import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  values: string[] = [];
  keys: string[] = [];
  // k: keyof typeof this.educationItem | undefined;
  /* constructor(private formBuilder: FormBuilder) {
    this.newEducationItem = this.formBuilder.group({
      [this.keys[0]]: ['', [Validators.required]],
      school: ['', [Validators.required]],
      degree: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      educationImg: ['', [Validators.required]],
    });
  } */

  ngOnInit(): void {
    /* let k: keyof typeof this.educationItem;
    for (k in this.educationItem) {
      this.values.push(this.educationItem[k]);
      this.keys.push(k);
      console.log(this.values, this.keys);
    }
    this.newEducationItem.patchValue({
      id: this.educationItem.id,
      school: this.educationItem.school,
      degree: this.educationItem.degree,
      startDate: this.educationItem.startDate,
      endDate: this.educationItem.endDate,
      educationImg: this.educationItem.educationImg,
    }); */
  }
}
