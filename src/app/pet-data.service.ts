import { Injectable } from '@angular/core';
import {Pet} from "./pet";
import {CatalogJson, PetsJson} from "./json-structure";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PetDataService {

  constructor(private http: HttpClient) {
  }

  private static imageFolder: string = 'images/pets/';
  private static catalogUri: string = 'data/catalog.json'

  private static json2Pet(petsJson: PetsJson): Pet {
    const pet: Pet = new Pet();
    pet.id = petsJson.id;
    pet.label = petsJson.label;
    pet.yearBorn = petsJson.price;
    pet.description = petsJson.description;
    pet.largeImgSrc = PetDataService.imageFolder + petsJson.picture.large;
    pet.smallImgSrc = PetDataService.imageFolder + petsJson.picture.small;
    return pet;
  }

  public getAllPets(): Observable<Pet[]> {
    return this.http.get<CatalogJson>(PetDataService.catalogUri)
      .pipe(
        map(catalog => catalog.pets
          .map(pet => PetDataService.json2Pet(pet)))
      )
  }

  public getPetById(id: string): Observable<Pet | undefined>{
    return this.getAllPets().pipe(
      map(pet => pet.find(pet => pet.id === id))
    )
  }
}
