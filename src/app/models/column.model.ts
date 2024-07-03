import { Audit } from './audit.model';
import { Feedback } from './feedback.model';

export type Column = {
  name: string;
  display_order: number;
  color: string;
  board_id: string;
  feedback?: Feedback[];
  updated_by: string;
} & Audit;
