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

}
