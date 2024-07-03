import { Audit } from './audit.model';
import { Vote } from './vote.model';

export type Feedback = {
  description: string;
  column_id: number;
  votes?: Vote[];
  updated_by: string;
} & Audit;
