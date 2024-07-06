import { Audit } from './audit.model';
import { Comment } from './comment.model';
import { Vote } from './vote.model';

export type Feedback = {
  description: string;
  column_id: number;
  votes?: Vote[];
  updated_by: string;
  comments: Comment[];
} & Audit;
