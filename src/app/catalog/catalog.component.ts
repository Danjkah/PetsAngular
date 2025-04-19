import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Pet} from "../pet";
import {PetDataService} from "../pet-data.service";
import {AsyncPipe} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
    selector: 'app-pet-index',
    imports: [
        AsyncPipe,
        RouterLink,
    ],
    templateUrl: './catalog.component.html',
    styleUrl: './catalog.component.css'
})
export class CatalogComponent {

  pets: Observable<Pet[]>;

  constructor(petDataService: PetDataService) {
    this.pets = petDataService.getAllPets();
  }
}
