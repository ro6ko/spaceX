import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Capsule } from '../models/capsule.model';

@Injectable({
  providedIn: 'root'
})
export class CapsuleService {

  private apiUrl = environment.api_url;
  constructor(private http: HttpClient) { }

  getAllCapsules(): Observable<Capsule[]> {
    return this.http.get<Capsule[]>(`${this.apiUrl}/capsules`)
      .pipe(
        catchError(this.handleError<Capsule[]>('getCapsules', []))
      );
  }
  getUpcomingCapsules(): Observable<Capsule[]> {
    return this.http.get<Capsule[]>(`${this.apiUrl}/capsules/upcoming`)
      .pipe(
        catchError(this.handleError<Capsule[]>('getCapsules', []))
      );
  }
  getPastCapsules(): Observable<Capsule[]> {
    return this.http.get<Capsule[]>(`${this.apiUrl}/capsules/past`)
      .pipe(
        catchError(this.handleError<Capsule[]>('getCapsules', []))
      );
  }
  getCapsule(id: string): Observable<Capsule> {
    return this.http.get<Capsule>(`${this.apiUrl}/capsules/${id}`)
      .pipe(
        catchError(this.handleError<Capsule>('getCapsule id=${id}'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: Capsule): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
