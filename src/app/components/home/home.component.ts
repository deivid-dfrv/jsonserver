import { Component, OnInit } from '@angular/core';
import { FruitService } from '../../services/fruit.service';
import { Fruit } from '../../interfaces/fruit';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
 
  arrFruits: Fruit[] = [];
  constructor(private fruitService: FruitService) {

  }

  ngOnInit(): void {
    this.fruitService.getAll().subscribe( (data) => {
      this.arrFruits = data;
      console.log(this.arrFruits);
    })
  }
}
