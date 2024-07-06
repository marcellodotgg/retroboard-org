import { Audit } from './audit.model';

export type Comment = {
  id: string;
  feedback_id: string;
  description: string;
} & Audit;
