import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Fruit } from '../models/fruit';
import { FruitService } from '../services/fruit.service';

@Component({
  selector: 'app-add-fruit',
  templateUrl: './add-fruit.component.html',
  styleUrls: ['./add-fruit.component.css']
})
export class AddFruitComponent {
  fruit: Fruit = {};

  constructor(private fruitService: FruitService) { }

  saveFruit() {

    this.fruitService.addFruit(this.fruit).subscribe(data=>{
      console.log("data added");
    });
    
  }

}
