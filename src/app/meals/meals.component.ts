import { Component, OnInit } from '@angular/core';
import {Meal} from '../meal'
import { MEALS } from '../mock-meals'

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {
meals = MEALS;

selectedMeal: Meal;



  constructor() { }

  ngOnInit() {
  }

  onSelect(meal: Meal): void {
    this.selectedMeal = meal;
  }
}
