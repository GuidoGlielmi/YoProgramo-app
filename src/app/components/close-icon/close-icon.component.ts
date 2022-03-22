import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-close-icon',
  templateUrl: './close-icon.component.html',
  styleUrls: ['./close-icon.component.css'],
})
export class CloseIconComponent implements OnInit {
  @Input() size!: string;

  constructor() {}

  ngOnInit(): void {}
}
