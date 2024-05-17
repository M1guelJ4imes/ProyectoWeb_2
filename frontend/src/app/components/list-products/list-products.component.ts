import { Component } from '@angular/core';
import { Product } from '../../interfaces/products';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent {
  listProducts: Product[]=[
    {id: 1, name: 'coca',description:'bebida azucarada', price: 200, stock:200},
    {id: 2, name: 'corona',description:'alcohol', price: 400, stock:50}
  ]

  constructor() {}

  ngOnInit(): void {
    
  }
}
