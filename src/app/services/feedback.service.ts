import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ROOT } from '../app.constants';
import { Feedback } from '../models/feedback.model';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  constructor(private readonly http: HttpClient) {}

  create(columnId: string, description: string): Observable<Feedback> {
    return this.http.put<Feedback>(`${API_ROOT}/feedback`, { column_id: columnId, description });
  }

  update(feedback: Feedback): Observable<Feedback> {
    return this.http.patch<Feedback>(`${API_ROOT}/feedback`, feedback);
  }

  destroy(id: string): Observable<never> {
    return this.http.delete<never>(`${API_ROOT}/feedback/${id}`);
  }

  voteFor(id: string): Observable<never> {
    return this.http.post<never>(`${API_ROOT}/feedback/${id}/vote`, {});
  }

  unvoteFor(id: string): Observable<never> {
    return this.http.post<never>(`${API_ROOT}/feedback/${id}/unvote`, {});
  }
}
