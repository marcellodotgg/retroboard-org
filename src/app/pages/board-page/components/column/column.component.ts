import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Column } from '../../../../models/column.model';
import { Feedback } from '../../../../models/feedback.model';
import { CreateFeedbackDialogComponent } from '../dialogs/create-feedback-dialog/create-feedback-dialog.component';
import { FeedbackComponent } from '../feedback/feedback.component';

@Component({
  selector: 'app-column',
  standalone: true,
  imports: [CommonModule, MatDialogModule, FeedbackComponent],
  templateUrl: './column.component.html',
  styleUrl: './column.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColumnComponent {
  readonly dialog = inject(MatDialog);

  column = input.required<Column>();
  sorted = input(false);

  totalVotes = computed(() => {
    return this.column().feedback?.reduce((prev, curr) => prev + (curr.votes?.length ?? 0), 0);
  });
  sortedColumn = computed(() => {
    const column = structuredClone(this.column());
    if (this.sorted()) {
      column.feedback?.sort(ColumnComponent.byVote);
    }
    return column;
  });

  openAddFeedbackDialog(): void {
    this.dialog.open(CreateFeedbackDialogComponent, { data: this.column() });
  }

  /** A sort function to sort feedbacks by vote. */
  private static byVote(a: Feedback, b: Feedback): number {
    return (b.votes?.length ?? 0) - (a.votes?.length ?? 0);
  }
}
