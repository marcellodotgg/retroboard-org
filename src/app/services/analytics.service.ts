import { Injectable } from '@angular/core';

declare var gtag: Function;

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  boardCreated(params: unknown): void {
    this.sendEvent('create_board', params);
  }

  sendEvent(eventName: string, params: unknown): void {
    gtag('event', eventName, params);
  }
}
