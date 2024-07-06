import { inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuditService {
  private readonly platformId = inject(PLATFORM_ID);

  whoAmI(): string {
    const auditId = localStorage.getItem('audit_id');

    if (!auditId) {
      return this.createAuditId();
    }
    return auditId;
  }

  private createAuditId(): string {
    const uuid = crypto.randomUUID();
    localStorage.setItem('audit_id', uuid);
    return uuid;
  }
}
