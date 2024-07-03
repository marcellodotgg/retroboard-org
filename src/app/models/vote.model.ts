import { Audit } from './audit.model';

export type Vote = {
  feedback_id: number;
} & Audit;
