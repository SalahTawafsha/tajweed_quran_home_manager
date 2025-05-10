import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CoursesListService {
  private apiUrl = 'http://localhost:8080/dashboard'; // Example API endpoint

  constructor(private http: HttpClient) { } // Inject HttpClient

  getData(): Observable<{ [key: string]: any }> {
    return this.http.get<{ [key: string]: any }>(this.apiUrl);
  }
}
