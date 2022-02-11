import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IPhoto } from './interface/photos';


@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  private _photosUrl: string = 'assets/photos.json';

  constructor(private http: HttpClient) {}

  getPhotos(): Observable<IPhoto[]> {
    return this.http.get<IPhoto[]>(this._photosUrl).pipe(
      tap((data) => JSON.stringify(data)),
      catchError(this.handleError)
    );
  }

  getPhoto(id: string): Observable<IPhoto | undefined> {
    return this.getPhotos().pipe(
      map((photos: IPhoto[]) => photos.find((p) => p.id === id))
    );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
