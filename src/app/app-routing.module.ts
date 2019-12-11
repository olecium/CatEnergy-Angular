import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {CatalogPageComponent} from './components/catalog-page/catalog-page.component';
import {PickProgramComponent} from './components/pick-program/pick-program.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: HomePageComponent},
  {path: 'catalog', component: CatalogPageComponent},
  {path: 'pick-program', component: PickProgramComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
