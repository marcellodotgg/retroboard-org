import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AuditService } from '../services/audit.service';

/**
 * Adds the `X-retro-audit-id` header to the request as a way to tell the API who you are.
 *
 * @param request the current request
 * @param next the next handler
 * @returns the next request with the `X-retro-audit-id` header set
 */
export function auditInterceptor(request: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const auditId = inject(AuditService).whoAmI();
  const requestWithAuditHeader = request.clone({
    headers: request.headers.append('X-retro-audit-id', auditId),
  });
  return next(requestWithAuditHeader);
}
