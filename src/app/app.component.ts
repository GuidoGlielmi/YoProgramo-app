import { Component, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'YoProgramo-app';
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
