import { Component, ElementRef, Inject, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.less']
})
export class CatalogPageComponent implements OnInit, OnDestroy {

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
    this.renderer.addClass(this.wrapper, 'catalog-page');
    this.renderer.addClass(this.wrapper, 'wrapper');
  }

  ngOnDestroy() {
    this.renderer.removeClass(this.wrapper, 'catalog-page');
    this.closeNav();
  }

  closeNav() {
    const navBtn = document.querySelector('.main-nav__toggle');
    const mainMenu = document.querySelector('.main-nav');

    mainMenu.classList.remove('main-nav--open');
    navBtn.classList.remove('main-nav__toggle--active');
  }
}
