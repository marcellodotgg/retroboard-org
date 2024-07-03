import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AuditService } from '../services/audit.service';

export function auditInterceptor(request: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const auditId = inject(AuditService).whoAmI();
  const requestWithAuditHeader = request.clone({
    headers: request.headers.append('X-retro-audit-id', auditId),
  });
  return next(requestWithAuditHeader);
}
