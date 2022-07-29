import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fruit } from '../models/fruit';

@Injectable()
export class FruitService {
  fruitURL = "http://localhost:3000/fruits";
  constructor(private http: HttpClient) {

  }
  getFruits(): Observable<Array<Fruit>>{
    return this.http.get<Array<Fruit>>(this.fruitURL)
  }
  addFruit(fruit: Fruit): Observable<Fruit> {
    return this.http.post<Fruit>(this.fruitURL,fruit);
  }

}
