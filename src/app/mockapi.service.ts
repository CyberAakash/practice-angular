import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockapiService {

  constructor(private http: HttpClient) { }
  getProduct(){
    return this.http.get('https://65e5a616d7f0758a76e6f248.mockapi.io/api/products').pipe(map((res:any)=> res))
  }

  getSingleProduct(id:any){
    return this.http.get('https://65e5a616d7f0758a76e6f248.mockapi.io/products/' + id).pipe(map((res:any)=> res))
  }
  updateProduct(id:any, data:any){
    return this.http.put('https://65e5a616d7f0758a76e6f248.mockapi.io/products/' + id ,data).pipe(map((res:any)=> res))
  }
}
