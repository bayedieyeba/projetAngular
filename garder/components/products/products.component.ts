import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.services';
import { AppDataState, DataStateEnum } from 'src/app/state/product.state';
import { catchError, map, startWith  } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    product= [
        {
            "id": 1,
            "name": "Computer",
            "price": 4300,
            "quantity": 600,
            "selected": true,
            "available": true
        },
        {
            "id": 2,
            "name": "Printer",
            "price": 300,
            "quantity": 100,
            "selected": true,
            "available": true
        },
        {
            "id": 3,
            "name": "Smartohone",
            "price": 1200,
            "quantity": 100,
            "selected": false,
            "available": true
        }
    ]

  public products$:Observable<AppDataState<Product[]>> | null =null

  readonly DataStateEnum = DataStateEnum

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
  }

  onGetAllProducts() {

   this.products$ = this.productService.getAllProducts().pipe(
      map(data=>{
        return({dataSate:DataStateEnum.LOADED,data:data})}
        ),
      startWith({dataSate:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))

     )



 }
 onSearch(value:any){

 }
 onSelect(p:Product){

 }
}
