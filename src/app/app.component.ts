import {
  trigger,
  state,
  transition,
  animate,
  style,
} from '@angular/animations';
import { Component } from '@angular/core';

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
  ],
})
export class AppComponent {
  title = 'YoProgramo-app';
  socialState = 'notShown';
  showSocial() {
    this.socialState = this.socialState === 'notShown' ? 'shown' : 'notShown';
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
