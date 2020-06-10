import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Dragon } from '../models/dragon.model';


@Injectable({
  providedIn: 'root'
})
export class DragonService {

  private apiUrl = environment.api_url;

  constructor(private http: HttpClient) { }
  
  getAllDragons(): Observable<Dragon[]> {
    return this.http.get<Dragon[]>(`${this.apiUrl}/dragons`)
      .pipe(
        catchError(this.handleError<Dragon[]>('getAllDragons', []))
      );
  }

  getDragon(id: string): Observable<Dragon> {
    return this.http.get<Dragon>(`${this.apiUrl}/dragons/${id}`)
      .pipe(
        catchError(this.handleError<Dragon>('getDragon id=${id}'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: Dragon): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
