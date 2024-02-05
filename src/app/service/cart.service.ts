import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

public  cartList:any=[];
public productList=new BehaviorSubject<any>([])

  constructor() { }

  getProductList(){
    return this.productList.asObservable();
  }

  addToCart(item :any){
    this.cartList.push(item);
    this.productList.next(this.cartList);
    this.getTotal();
    console.log(this.cartList);
    alert("Item added to cart");
    
  }

  removeCart(item :any){
    this.cartList.map((res:any,index:number)=>{
      if(item.id===res.id){
        this.cartList.splice(index,1);
      }
    })
  }

  emptyCart(){
    this.cartList=[];
    this.productList.next(this.cartList);
  }

  getTotal():number{
    let GrandTotal=0;
    this.cartList.map((res:any)=>{
      GrandTotal+=res.total;
    })

    return GrandTotal;
  }
}
