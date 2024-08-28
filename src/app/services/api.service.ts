import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Options } from '../../types';

// '@Injectable' decorator is so that angular can inject it to a component as a dependency.
//    - Like putting it in a constructor of a class.
//    - Saying Class A can be injected to Class B.
//  The optional argument tells where we want to provide this service.
//    - 'root' means it is an app-level injector. Can be injected to anywhere.
//  You declare the service now as a dependency PROVIDER and can be used by dependency consumers.
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // We need a way to make a 'GET' request, so this service does that.
  // 'HttpClient' is from Angular and used to make REST API calls from a url.
  // Put in the constructor the services the class needs.
  //  - A service can depend to another service
  //  - A component can depend on a service.

  // This would produce an error since there is no provider for the HttpClient dependency. Go to `app.config.ts` to provide it in the root level.
  constructor(private httpClient: HttpClient) {}

  // `<T>` is a Generic. Can represent any type.
  // We define this method so that we dont need to call 'HttpClient' on other files when we make a request.

  // 'Options' Type is from the 'src/types' file copied from 'HttpClient'. (since bad practice to use 'any' type)
  get<T>(url: string, options: Options): Observable<T> {
    // 'this' refers to the class. And Use the private variable 'httpClient'
    return this.httpClient.get<T>(url, options) as Observable<T>;
  }
}
