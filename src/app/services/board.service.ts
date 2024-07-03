import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ROOT, DEFAULT_BOARD_CONFIG } from '../app.constants';
import { Board } from '../models/board.model';
import { AuditService } from './audit.service';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  /** The current board. */
  board = signal<Board | undefined>(undefined);

  constructor(
    private readonly http: HttpClient,
    private readonly auditService: AuditService,
  ) {}

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

  update(id: string, config: Partial<Board>): Observable<Board> {
    return this.http.patch<Board>(`${API_ROOT}/boards`, { id, ...config });
  }

  destroy(id: string): Observable<never> {
    return this.http.delete<never>(`${API_ROOT}/boards/${id}`);
  }

  isOwner(): boolean {
    return this.board()?.created_by === this.auditService.whoAmI();
  }
}
