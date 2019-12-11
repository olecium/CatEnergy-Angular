import {Component, ElementRef, Inject, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit, OnDestroy {

  wrapper: Element;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    @Inject(DOCUMENT) private document: Document,
  ) {
    this.wrapper = this.document.querySelector('.wrapper');
  }

  ngOnInit() {
    this.renderer.removeClass(this.wrapper, 'wrapper');
    this.renderer.addClass(this.wrapper, 'index-page');
    this.renderer.addClass(this.wrapper, 'wrapper');
  }

  ngOnDestroy() {
    this.renderer.removeClass(this.wrapper, 'index-page');
    this.closeNav();
  }

  closeNav() {
    const navBtn = document.querySelector('.main-nav__toggle');
    const mainMenu = document.querySelector('.main-nav');

    mainMenu.classList.remove('main-nav--open');
    navBtn.classList.remove('main-nav__toggle--active');
  }
  switchCats(event) {
    console.log(event);
    /*const slider = event.target.querySelectorAll('.slider__label');
    slider.forEach((slider) => {
      slider.addEventListener('click', () => {
        let labelFor = slider.getAttribute('for');
        let img = slider.parentNode.parentNode.querySelector('.slider__image');

        if(labelFor == 'before'){
          img.classList.remove('slider__image--after');
        } else {
          img.classList.remove('slider__image--before');
        }
        img.classList.add(`slider__image--${labelFor}`);
      });
    });*/
  }
}
