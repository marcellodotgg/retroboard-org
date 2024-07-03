import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ROOT, DEFAULT_BOARD_CONFIG } from '../app.constants';
import { Board } from '../models/board.model';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  /** The current board. */
  board = signal<Board | undefined>(undefined);

  constructor(private readonly http: HttpClient) {}

  /** Gets all of the boards associated to the current user. */
  getMyBoards(): Observable<Board[]> {
    return this.http.get<Board[]>(`${API_ROOT}/boards`);
  }

  /** Gets the board by id. */
  get(id: string): Observable<Board> {
    return this.http.get<Board>(`${API_ROOT}/boards/${id}`);
  }

  /** Creates a new board with the given name and optional configuration. */
  create(name: string, config = DEFAULT_BOARD_CONFIG): Observable<Board> {
    return this.http.put<Board>(`${API_ROOT}/boards`, { ...config, name });
  }
}
