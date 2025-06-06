import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fruit } from '../interfaces/fruit';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  constructor(private http: HttpClient) { 

  }

  linkBase:string =  "http://localhost:3000/fruits";

  getAll() {
    return this.http.get<Fruit[]>(this.linkBase);
  }

  create(data: Fruit) {
    return this.http.post<Fruit>(this.linkBase, data);
  }
}
