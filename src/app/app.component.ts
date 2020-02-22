import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-shopping';

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  constructor(public translate: TranslateService) {
    
    translate.addLangs(['en', 'es']);
    // seteo idoma por defecto a español
    translate.setDefaultLang('es');
    const browserLang = translate.getBrowserLang();
    // detecto el idioma del navegador con regex, si no encuentra setea por defecto español
    translate.use(browserLang.match(/en|es/) ? browserLang : 'es');

  }

}
