import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root',
})

export class ProductService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(`http://localhost:8080/product`);
  }

  getProduct(id: number): Observable<any> {
    return this.http.get(`http://localhost:8080/product/${id}`);
  }

  addProduct(body: any): Observable<any> {
    return this.http.post(`http://localhost:8080/product`, body)
  }

}
