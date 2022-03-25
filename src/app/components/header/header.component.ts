import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() profileImgSrc: string = '';
  @Input() lastName: string = '';
  @Input() firstName: string = '';
  @Output() onProfileImgChange = new EventEmitter();
  @Output() onNameChange = new EventEmitter();
  loggedIn = true;
  editUser = false;
  constructor() {}

  ngOnInit(): void {}
}
