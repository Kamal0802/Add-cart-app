import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartList:any;
  total:number=0

  constructor(private cart:CartService){

  }

  ngOnInit(): void {
    this.cart.getProductList().subscribe((res:any)=>{
      this.cartList=res;
      this.total=this.cart.getTotal();
    })
  }

  removeItem(item:any){
    this.cart.removeCart(item);
    this.total=this.cart.getTotal();
  }

  empty(){
    this.cart.emptyCart();
  }



}
