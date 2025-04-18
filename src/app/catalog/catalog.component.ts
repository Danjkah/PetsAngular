import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Flower} from "../flower";
import {FlowerDataService} from "../flower-data.service";
import {AsyncPipe, CurrencyPipe} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
    selector: 'app-flower-index',
    imports: [
        AsyncPipe,
        RouterLink,
        CurrencyPipe
    ],
    templateUrl: './catalog.component.html',
    styleUrl: './catalog.component.css'
})
export class CatalogComponent {

  flowers: Observable<Flower[]>;

  constructor(flowerDataService: FlowerDataService) {
    this.flowers = flowerDataService.getAllFlowers();
  }
}
