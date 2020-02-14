import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Ensino Médio',
      url: '/ensino-medio',
      icon: 'bookmarks'
    },
    {
      title: 'Ensiono Integrado',
      url: '/ensino-integrado',
      icon: 'school'
    },
    {
      title: 'Cursos Técnicos',
      url: '/cursos-tecnicos',
      icon: 'construct'
    },
    {
      title: 'Histórico',
      url: '/historico',
      icon: 'book'
    },
    {
      title: 'Contato',
      url: '/contato',
      icon: "call"
    }

  
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
