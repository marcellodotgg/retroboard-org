import { isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { API_WEBSOCKET_URL } from '../app.constants';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  private ws: WebSocket | undefined;
  private readonly board = new BehaviorSubject<MessageEvent | undefined>(undefined);
  readonly board$ = this.board.asObservable();
  readonly opened = signal(false);

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  connect(boardId: string): void {
    if (isPlatformServer(this.platformId)) return;

    this.ws = new WebSocket(`${API_WEBSOCKET_URL}/${boardId}`);

    this.ws.onopen = (event) => {
      console.log('websocket connection opened', event);
      this.opened.set(true);
    };

    this.ws.onmessage = (event) => {
      this.board.next(event);
    };

    this.ws.onclose = (event) => {
      console.log('websocket connection closed', event);
      this.opened.set(false);
    };

    this.ws.onerror = (event) => {
      console.error('websocker error', event);
    };
  }

  disconnect(): void {
    this.ws?.close();
  }

  sendMessage(message: string): void {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(message);
    } else {
      console.error('WebSocket is not open. ReadyState:', this.ws?.readyState);
    }
  }
}
