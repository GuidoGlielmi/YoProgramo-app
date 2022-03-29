import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-close-and-edit',
  templateUrl: './close-and-edit.component.html',
  styleUrls: ['./close-and-edit.component.css'],
})
export class CloseAndEditComponent implements OnInit {
  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();
  loggedIn = false;
  constructor(private authService: AuthService) {
    authService.isLoggedListener().subscribe((isLogged) => {
      this.loggedIn = isLogged;
    });
  }

  ngOnInit(): void {}
}
