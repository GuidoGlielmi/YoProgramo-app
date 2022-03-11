import {
  trigger,
  state,
  transition,
  animate,
  style,
} from '@angular/animations';
import { Component, HostListener, ViewChild } from '@angular/core';

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
      state('shown', style({ height: '5vh' })),
      transition('shown <=> notShown', animate('400ms ease-out')),
    ]),
    trigger('goDown', [
      state('unpressed', style({ width: '65px' })),
      state('pressed', style({ width: '60px' })),
      transition('unpressed <=> pressed', animate('40ms ease-out')),
    ]),
    trigger('goDownFadeOut', [
      state('notBottom', style({ opacity: 1 })),
      state('bottom', style({ opacity: 0 })),
      transition('notBottom <=> bottom', animate('500ms ease-out')),
    ]),
  ],
})
export class AppComponent {
  title = 'YoProgramo-app';
  socialState = 'notShown';
  goDownState = 'unpressed';
  goDownFadeOutState = 'notBottom';
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

  goDown(currentState: boolean) {
    if (currentState) this.goDownState = 'unpressed';
    else this.goDownState = 'pressed';
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
