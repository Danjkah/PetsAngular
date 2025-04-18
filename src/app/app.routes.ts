import { Routes } from '@angular/router';
import {CatalogComponent} from "./catalog/catalog.component";
import {FlowerDetailsComponent} from "./flower-details/flower-details.component";

export const routes: Routes = [
  {path: 'catalog', component: CatalogComponent},
  {path: 'flowers/:id', component: FlowerDetailsComponent},
  {path: '', redirectTo: 'catalog', pathMatch: 'full'},
  {path: '**', redirectTo: 'catalog'}
];
