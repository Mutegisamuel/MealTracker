import { Component, OnInit } from '@angular/core';
import {Meal} from '../meal'

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {
  meal: Meal ={
    caloris:100,
    name: 'Rise'
  }

  constructor() { }

  ngOnInit() {
  }

}
