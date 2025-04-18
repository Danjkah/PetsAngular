import { Injectable } from '@angular/core';
import {Flower} from "./flower";
import {CatalogJson, FlowerJson} from "./json-structure";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FlowerDataService {

  constructor(private http: HttpClient) {
  }

  private static imageFolder: string = 'images/flowers/';
  private static catalogUri: string = 'data/catalog.json'

  private static json2Flower(flowerJson: FlowerJson): Flower {
    const flower: Flower = new Flower();
    flower.id = flowerJson.id;
    flower.label = flowerJson.label;
    flower.price = flowerJson.price;
    flower.description = flowerJson.description;
    flower.largeImgSrc = FlowerDataService.imageFolder + flowerJson.picture.large;
    flower.smallImgSrc = FlowerDataService.imageFolder + flowerJson.picture.small;
    return flower;
  }

  public getAllFlowers(): Observable<Flower[]> {
    return this.http.get<CatalogJson>(FlowerDataService.catalogUri)
      .pipe(
        map(catalog => catalog.flowers
          .map(flower => FlowerDataService.json2Flower(flower)))
      )
  }

  public getFlowerById(id: string): Observable<Flower | undefined>{
    return this.getAllFlowers().pipe(
      map(flowers => flowers.find(flower => flower.id === id))
    )
  }
}
