import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export function auditInterceptor(request: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const requestWithAuditHeader = request.clone({
    headers: request.headers.append('X-retro-audit-id', 'test'),
  });
  return next(requestWithAuditHeader);
}
