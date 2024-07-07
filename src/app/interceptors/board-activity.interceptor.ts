import { HttpEvent, HttpEventType, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { BoardService } from '../services/board.service';
import { WebsocketService } from '../services/websocket.service';

/**
 * Tells the service that a change occurred to the board and to broadcast
 * to all users within that board.
 */
export function boardActivityInterceptor(
  request: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> {
  const boardService = inject(BoardService);
  const websocketService = inject(WebsocketService);
  const router = inject(Router);

  return next(request).pipe(
    tap((event) => {
      if (event.type === HttpEventType.Response && boardService.board()?.id) {
        if (isOnBoardsPage(router.url) && websocketService.opened()) {
          websocketService.sendMessage(getBoardIdFromCurrentUrl(router.url));
        }
      }
    }),
  );
}

function isOnBoardsPage(url: string): boolean {
  return url.includes('/boards/');
}

function getBoardIdFromCurrentUrl(url: string): string {
  return url.split('/').at(-1) ?? '';
}
