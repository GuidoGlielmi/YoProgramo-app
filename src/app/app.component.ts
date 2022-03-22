import {
  trigger,
  state,
  transition,
  animate,
  style,
} from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
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
  ],
})
export class AppComponent implements OnInit {
  title = 'YoProgramo-app';
  socialState = 'notShown';
  goDownState = 'unpressed';
  loginButtonState = 'unpressed';
  goDownFadeOutState = 'notBottom';
  loginState = 'notShown';
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
  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    try {
      this.userService.getUser().subscribe((user: user[]) => {
        console.log(user);
        this.user = user[0];
      });
    } catch (err) {
      console.log(err);
    }
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
  toggleLogin(event: any) {
    if (
      this.loginState === 'notShown' ||
      event.target.id === 'modalBackground' ||
      event.target.id === 'modalButton'
    ) {
      this.loginState = this.loginState === 'notShown' ? 'shown' : 'notShown';
    }
  }
  pressLoginButton(currentState: boolean) {
    if (currentState) this.loginButtonState = 'unpressed';
    else this.loginButtonState = 'pressed';
  }
}

/*
Los templates de Angular son fragmentos de HTML dinámicos, y cuando Angular los renderiza, transforma el DOM de acuerdo con las instrucciones dadas por las directivas. Una directiva es una clase con un decorador @Directive() (del cual extiende el decorador @Component). Además de los componentes, existen otros dos tipos de directivas: estructural y atributo.
@Component: Directivas con template propio.
  - ngModel: Implementa bindings
  - ngClass: Añade clases
  - ngStyle: Añade inline-styles
@Structural: Añaden o quitan elementos del DOM.
@Attribute: Cambian la apariencia o comportamiento del DOM.
*/
