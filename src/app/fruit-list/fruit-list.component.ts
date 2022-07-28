import { Component, OnInit,Input } from '@angular/core';
import { Fruit } from '../models/fruit';
import { FRUITS } from '../models/fruit-list';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.css']
})
export class FruitListComponent implements OnInit {

  @Input()
  fruits: Fruit[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
