import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {KidsComponent} from './kids/kids.component';
import {SoumComponent} from './soum/soum.component';
import {DatenschutzComponent} from './datenschutz/datenschutz.component';
import {ImpressumComponent} from './impressum/impressum.component';
import {KontaktComponent} from './kontakt/kontakt.component';
import {HilfeComponent} from './hilfe/hilfe.component';
import {WomenComponent} from './women/women.component';
import {ProduktComponent} from './produkt/produkt.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'kids',
    component: KidsComponent
  },
  {
    path: 'soum',
    component: SoumComponent
  },
  {
    path: 'women',
    component: WomenComponent
  },
  {
    path: 'datenschutz',
    component: DatenschutzComponent
  },
  {
    path: 'impressum',
    component: ImpressumComponent
  },
  {
    path: 'kontakt',
    component: KontaktComponent
  },
  {
    path: 'hilfe',
    component: HilfeComponent
  },
  {
    path: 'soum/:produktName',
    component: ProduktComponent
  },
  {
    path: 'kids/:produktName',
    component: ProduktComponent
  },
  {
    path: 'women/:produktName',
    component: ProduktComponent
  },
  {
    path: 'cart',
    component: ShoppingCartComponent
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
