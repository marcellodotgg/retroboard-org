import { Audit } from './audit.model';
import { Column } from './column.model';

export type Board = {
  name: string;
  columns?: Column[];
  updated_by: string;
} & Audit;
