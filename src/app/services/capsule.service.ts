import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Capsule } from '../models/capsule.service';

@Injectable({
  providedIn: 'root'
})
export class CapsuleService {

  private apiUrl = environment.api_url;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getCapsules(): Observable<Capsule[]> {
    return this.http.get<Capsule[]>(`${this.apiUrl}/capsules`)
      .pipe(
        catchError(this.handleError<Capsule[]>('getCapsules', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: Capsule): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
