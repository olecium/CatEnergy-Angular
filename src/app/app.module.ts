import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CatalogPageComponent } from './components/catalog-page/catalog-page.component';
import { PickProgramComponent } from './components/pick-program/pick-program.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CatalogPageComponent,
    PickProgramComponent,
    PageNotFoundComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
