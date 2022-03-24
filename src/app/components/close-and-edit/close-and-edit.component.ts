import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-close-and-edit',
  templateUrl: './close-and-edit.component.html',
  styleUrls: ['./close-and-edit.component.css'],
})
export class CloseAndEditComponent implements OnInit {
  constructor() {}
  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();

  ngOnInit(): void {}
}
