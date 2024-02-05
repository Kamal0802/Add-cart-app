import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productsList: any;
  constructor(private api: ApiService,private cart:CartService) {}
  ngOnInit(): void {
    this.api.getProducts().subscribe((res) => {
      this.productsList = res;

     this.productsList.forEach((element: any) => {
      Object.assign(element,{quantity:1,total:element.price})
     }); 
      console.log(this.productsList);
      
    });
  }

  addCart(item:any){
     this.cart.addToCart(item);
  }
}
