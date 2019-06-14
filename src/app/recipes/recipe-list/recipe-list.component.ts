import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Description of Test Rercipe','https://www.wellplated.com/wp-content/uploads/2018/04/Mediterranean-Pasta-recipe-600x792.jpg')
  ];
  
  constructor() { }

  ngOnInit() {
  }

}