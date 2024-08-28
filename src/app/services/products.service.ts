import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { PaginationParams, Products } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  // ApiService Dependency has been injected to this service.
  // Constructor is used to inject Dependencies such as Services.
  constructor(private apiServ: ApiService) {}

  // Initialization logic is not recommended in constructor and should be on 'ngOnInit' lifecycle hook (for components not services).

  // Observables is similar to a Promise. Handles asyncronous operations.
  // Observables are stream of events or data.
  // Observables vs Promises:
  // • Observable is 0 to Many Results; Promises is 0 to 1 Result.
  // • Observables can stream data over a period of time, than sending data all at once;
  //   Promises sends all data once it is completed.
  getProducts = (url: string, params: PaginationParams): Observable<Products> =>
    this.apiServ.get(url, {
      params,
      responseType: 'json',
    });
}
