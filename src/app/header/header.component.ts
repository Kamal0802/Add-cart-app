import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

   cartCount:number=0;
   constructor(private cart:CartService){
        
    this.cart.getProductList().subscribe(res=>{
this.cartCount=res.length;
    })
   }
}

