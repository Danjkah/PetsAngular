import { Component } from '@angular/core';
import {Pet} from "../pet";
import {Subscription} from "rxjs";
import {PetDataService} from "../pet-data.service";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {MatCard, MatCardContent, MatCardImage, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";
import {MatAnchor} from "@angular/material/button";

@Component({
    selector: 'app-pet-details',
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
    templateUrl: './pet-details.component.html',
    styleUrl: './pet-details.component.css'
})
export class PetDetailsComponent {

  pet: Pet | undefined;

  private petSub: Subscription | undefined;

  constructor(petDataService: PetDataService, activatedRoute: ActivatedRoute) {

    const id: string | null =  activatedRoute.snapshot.paramMap.get('id');
    if(id != null){
      this.petSub =
        petDataService.getPetById(id).subscribe(pet => this.pet = pet);
    }
  }

  ngOnDestroy(){
    this.petSub?.unsubscribe();
  }
}
