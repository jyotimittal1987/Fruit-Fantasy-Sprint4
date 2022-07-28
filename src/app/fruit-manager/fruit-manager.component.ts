import { Component, OnChanges, OnInit } from '@angular/core';
import { Fruit } from '../models/fruit';
import { FruitService } from '../services/fruit.service';


@Component({
  selector: 'app-fruit-manager',
  templateUrl: './fruit-manager.component.html',
  styleUrls: ['./fruit-manager.component.css']
})
export class FruitManagerComponent implements OnInit{
  fruits: Fruit[] = [];

  displayNoRecords: boolean = false;
  searchValue: string = '';
  temp: Fruit[] = [];
  
  constructor(private fruitService: FruitService) { }

  ngOnInit(): void {
    this.fruitService.getFruits().subscribe(data => {
      this.fruits = data;
      this.temp=data;
      console.log(this.fruits);
    })
  }
  onSearchTextChanged(searchValue: string) {
    this.searchValue = searchValue;
    console.log(searchValue);
   if (searchValue === '') {
      this.displayNoRecords = false;
      this.ngOnInit();
      }
    else{
      this.fruits = this.temp.filter((result) =>
        result?.name?.startsWith(searchValue)
      );
      this.displayNoRecords = false;
    }
    if (this.fruits.length == 0) {
      this.displayNoRecords = true;
    }
 

}

}
