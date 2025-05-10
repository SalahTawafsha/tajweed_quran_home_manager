import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseDetailsService {
  private apiUrl = 'http://localhost:8080/'; // Example API endpoint

  constructor(private http: HttpClient) { } // Inject HttpClient

  getData(courseId: String): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}courses/${courseId}`);
  }

  postAbsence(date: String, studentIds: Array<number>): Observable<any[]> {
    return this.http.post<any[]>(`${this.apiUrl}student_absence`, {'date': date, 'studentIds': studentIds})
  }

}
