import {Component, Input} from '@angular/core';
import {DatePipe} from "@angular/common";
import {MatToolbar} from "@angular/material/toolbar";

@Component({
    selector: 'app-footer',
  imports: [
    DatePipe,
    MatToolbar
  ],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css'
})
export class FooterComponent {

  @Input() name: string = 'Sheridan College';
  today: Date;

  constructor() {
    this.today = new Date();
  }
}
