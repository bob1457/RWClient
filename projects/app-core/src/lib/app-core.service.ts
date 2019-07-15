import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class AppCoreService<T, ID> {

  constructor(
    protected http: HttpClient,
    protected baseUrl: string
  ) { }

  // ************************************************************
    // Generic CRUD operations
    // ************************************************************
    save(t: T): Observable<T>{
      return this.http.post<T>(`${this.baseUrl}`, t);
    }

    findOne(id: ID) {
      return this.http.get<T>(`${this.baseUrl}/${id}`);
    }

    findAll() {
      return this.http.get<T[]>(`${this.baseUrl}`);
    }

    update(t: T) {
      return this.http.post<T>(`${this.baseUrl}`, t);
    }

    delete(id: ID) {
      return this.http.delete<T>(`${this.baseUrl}/${id}`);
    }
}
