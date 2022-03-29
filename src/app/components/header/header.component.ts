import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';

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
  editUser = false;
  constructor(private authService: AuthService) {
    authService.isLoggedListener().subscribe(() => (this.editUser = false));
  }

  ngOnInit(): void {}
}
