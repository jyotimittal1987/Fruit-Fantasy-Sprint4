import { Component, OnInit ,Input} from '@angular/core';
import { Fruit } from '../models/fruit';
import { FRUITS } from '../models/fruit-list';


@Component({
  selector: 'app-fruit-card',
  templateUrl: './fruit-card.component.html',
  styleUrls: ['./fruit-card.component.css']
})
export class FruitCardComponent implements OnInit {
  @Input()
  fruit:Fruit={};

  constructor() { }

  ngOnInit(): void {
  }

}
