import {
  trigger,
  state,
  transition,
  animate,
  style,
} from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from './service/auth/auth.service';
import { ResponseService } from './service/responses/response.service';
import { user, UsersService } from './service/users/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('rotateSocialArrow', [
      state('notShown', style({ transform: 'rotate(0)' })),
      state('shown', style({ transform: 'rotate(-180deg)' })),
      transition('shown <=> notShown', animate('400ms ease-out')),
    ]),
    trigger('hideSocialIcons', [
      state('notShown', style({ height: 0 })),
      state('shown', style({ height: '10vh' })),
      transition('shown <=> notShown', animate('400ms ease-out')),
    ]),
    trigger('goDown', [
      state('unpressed', style({ transform: 'scale(1)' })),
      state('pressed', style({ transform: 'scale(0.95)' })),
      transition('unpressed <=> pressed', animate('40ms ease-out')),
    ]),
    trigger('goDownFadeOut', [
      state('notBottom', style({ opacity: 1 })),
      state('bottom', style({ opacity: 0 })),
      transition('notBottom <=> bottom', animate('500ms ease-out')),
    ]),
    trigger('showLogin', [
      state('notShown', style({ opacity: 0, 'z-index': -1 })),
      state('shown', style({ opacity: 1, 'z-index': 2 })),
      transition('notShown <=> shown', animate('400ms ease-out')),
    ]),
    trigger('showResponseModal', [
      state('notShown', style({ opacity: 0, 'z-index': -1 })),
      state('shown', style({ opacity: 1, 'z-index': 2 })),
      transition('notShown <=> shown', animate('400ms ease-out')),
    ]),
  ],
})
export class AppComponent implements OnInit {
  title = 'YoProgramo-app';
  socialState = 'notShown';
  goDownState = 'unpressed';
  loginButtonState = 'unpressed';
  goDownFadeOutState = 'notBottom';
  showLoginState = 'notShown';
  responseModalState = 'notShown';
  responseMsg = '';
  responseMsgError = false;
  user: user = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    linkedInUrl: '',
    githubUrl: '',
    aboutMe: '',
    profileImg: '',
  };
  loggedIn = false;
  editLinks = false;
  constructor(
    private userService: UsersService,
    private responseService: ResponseService,
    private authService: AuthService
  ) {
    authService.isLoggedListener().subscribe((isLogged) => {
      this.loggedIn = isLogged;
      this.editLinks = false;
    });
  }

  ngOnInit(): void {
    this.responseService.errorListener().subscribe((msg) => {
      if (msg) {
        this.responseMsgError = true;
        this.responseModalState = 'shown';
        this.responseMsg = msg;
      }
    });
    this.responseService.successListener().subscribe((msg) => {
      if (msg) {
        this.responseMsgError = false;
        this.responseModalState = 'shown';
        this.responseMsg = msg;
        setTimeout(() => {
          this.responseModalState = 'notShown';
        }, 5000);
      }
    });
    this.userService.getUser().subscribe((user: user[]) => {
      this.user = user[0];
    });
  }
  saveUser() {
    console.log(this.user);
    this.userService.postUser(this.user).subscribe();
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    if (
      document.documentElement.scrollTop >
      document.documentElement.scrollHeight -
        document.documentElement.clientHeight -
        200
    ) {
      this.goDownFadeOutState = 'bottom';
    } else this.goDownFadeOutState = 'notBottom';
  }
  showSocial() {
    this.socialState = this.socialState === 'notShown' ? 'shown' : 'notShown';
  }

  pressGoDownButton(currentState: boolean) {
    if (currentState) this.goDownState = 'unpressed';
    else this.goDownState = 'pressed';
  }
  toggleShowLoginModal(event: any) {
    if (
      this.showLoginState === 'notShown' ||
      event.target.id === 'modalBackground' ||
      event.target.id === 'modalButton'
    ) {
      this.showLoginState =
        this.showLoginState === 'notShown' ? 'shown' : 'notShown';
    }
  }
  logout() {
    this.authService.logOut();
  }
  pressLoginButton(currentState: boolean) {
    if (currentState) this.loginButtonState = 'unpressed';
    else this.loginButtonState = 'pressed';
  }
}
