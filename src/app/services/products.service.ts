import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getProductsList():Observable<any>{
    return this.http.get('https://dummyjson.com/products'
      
    );
  }

  getProductsDetails(id:number):Observable<any>{
    return this.http.get(`https://dummyjson.com/products/${id}`
    )
  }

  getProductsCart():Observable<any>{
    return this.http.get('https://dummyjson.com/products'
    )
  }
}
