import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'catenergy-angular';


  navToggle(event): void {
    const menuButton = event.target;
    const mainMenu = document.querySelector('.main-nav');

    if (menuButton.classList.contains('main-nav__toggle--active')) {
      mainMenu.classList.remove('main-nav--open');
      menuButton.classList.remove('main-nav__toggle--active');
    } else {
      mainMenu.classList.add('main-nav--open');
      menuButton.classList.add('main-nav__toggle--active');
    }
  }

}
