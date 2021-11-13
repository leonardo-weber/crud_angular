import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from './../models/product-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogicService {

  dataBaseURL = "http://localhost:3000/products"
  products!: Product;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }


  snackBarToggle(msg:string): void {
    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }


  getRequest(): Observable<Product[]> {
    return this.http.get<Product[]>(this.dataBaseURL)
  }

  postRequest(product: Product): Observable<Product>  {
    return this.http.post<Product>(this.dataBaseURL, product )
  }

  delete(id: number): Observable<Product> {
   return this.http.delete<Product>(`${this.dataBaseURL}/${id}`)
  }

  getRequestWithID(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.dataBaseURL}/${id}`)
  }

  putRequest(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.dataBaseURL}/${id}`, product)
  }
}
