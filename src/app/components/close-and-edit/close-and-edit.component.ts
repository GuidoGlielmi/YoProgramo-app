import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-close-and-edit',
  templateUrl: './close-and-edit.component.html',
  styleUrls: ['./close-and-edit.component.css'],
})
export class CloseAndEditComponent implements OnInit {
  constructor() {}

  onEdit() {
    console.log('edit');
  }
  onDelete() {
    console.log('edit');
  }
  ngOnInit(): void {}
}
