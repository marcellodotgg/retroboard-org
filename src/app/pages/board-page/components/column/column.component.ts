import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Column } from '../../../../models/column.model';
import { CreateFeedbackDialogComponent } from '../dialogs/create-feedback-dialog/create-feedback-dialog.component';

@Component({
  selector: 'app-column',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './column.component.html',
  styleUrl: './column.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColumnComponent {
  readonly dialog = inject(MatDialog);

  column = input.required<Column>();

  openAddFeedbackDialog(): void {
    this.dialog.open(CreateFeedbackDialogComponent, { data: this.column() });
  }
}
