import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FruitService } from '../../services/fruit.service';
import { Router } from '@angular/router';
import { Fruit } from '../../interfaces/fruit';

@Component({
  selector: 'app-create',
  imports: [ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent implements OnInit {
  fruitForm: FormGroup;
  objFruit: Fruit  = new Fruit();

  constructor(private fruitService: FruitService, private router: Router) {
    this.fruitForm = new FormGroup({
      name: new FormControl('', Validators.required),
      quantity: new FormControl('', Validators.required),
      price: new FormControl('', [Validators.required, Validators.min(0)]),
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.objFruit.id = 0;
    this.objFruit = this.fruitForm.value;
    this.fruitService.create(this.objFruit).subscribe({
      next: (data) => {
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Error creating fruit:', error);
      }
    });
  }
}
