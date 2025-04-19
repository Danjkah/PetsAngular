import { Component } from '@angular/core';
import {Flower} from "../flower";
import {Subscription} from "rxjs";
import {FlowerDataService} from "../flower-data.service";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {MatCard, MatCardContent, MatCardImage, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";
import {MatAnchor} from "@angular/material/button";

@Component({
    selector: 'app-flower-details',
  imports: [
    RouterLink,
    MatCardImage,
    MatCard,
    MatCardTitle,
    MatCardSubtitle,
    MatDivider,
    MatCardContent,
    MatAnchor
  ],
    templateUrl: './flower-details.component.html',
    styleUrl: './flower-details.component.css'
})
export class FlowerDetailsComponent {

  flower: Flower | undefined;

  private flowerSub: Subscription | undefined;

  constructor(flowerDataService: FlowerDataService, activatedRoute: ActivatedRoute) {

    const id: string | null =  activatedRoute.snapshot.paramMap.get('id');
    if(id != null){
      this.flowerSub =
        flowerDataService.getFlowerById(id).subscribe(flower => this.flower = flower);
    }
  }

  ngOnDestroy(){
    this.flowerSub?.unsubscribe();
  }
}
