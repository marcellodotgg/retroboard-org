import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ROOT } from '../app.constants';
import { Column } from '../models/column.model';
import { BoardService } from './board.service';

@Injectable({
  providedIn: 'root',
})
export class ColumnService {
  constructor(
    private readonly http: HttpClient,
    private readonly boardService: BoardService,
  ) {}

  create(name = 'New Column', config = {}): Observable<Column> {
    return this.http.put<Column>(`${API_ROOT}/columns`, {
      board_id: this.boardService.board()?.id,
      name,
      display_order: (this.boardService.board()?.columns?.length ?? 0) + 1,
      ...config,
    } as Partial<Column>);
  }
}
