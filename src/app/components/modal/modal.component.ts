import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  credentials: FormGroup;
  passwordClicked = false;
  usernameClicked = false;
  isLoading = false;
  @Output() onSuccessfullLogIn = new EventEmitter<any>();
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.credentials = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  logIn() {
    this.isLoading = true;
    this.authService.logIn(this.credentials.value).subscribe(() => {
      this.onSuccessfullLogIn.emit();
      //this.isLoading = false;
    });
  }
  get username() {
    return this.credentials.get('username');
  }
  get password() {
    return this.credentials.get('password');
  }
}
