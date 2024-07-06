import { DialogRef } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MaxLength } from '../../../../../app.constants';
import { Column } from '../../../../../models/column.model';
import { PluralPipe } from '../../../../../pipes/plural.pipe';
import { FeedbackService } from '../../../../../services/feedback.service';

@Component({
  selector: 'app-create-comment-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatDialogModule, PluralPipe],
  templateUrl: './create-comment-dialog.component.html',
  styleUrl: './create-comment-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateCommentDialogComponent {
  readonly MaxLength = MaxLength;

  form = new FormGroup({
    description: new FormControl('', [Validators.required, Validators.maxLength(MaxLength.CommentDescription)]),
  });

  get description(): string {
    return this.form.get('description')?.value ?? '';
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Column,
    private readonly dialogRef: DialogRef,
    private readonly feedbackService: FeedbackService,
  ) {}

  addComment(): void {
    this.feedbackService.addComment(this.data.id, this.description).subscribe({
      next: () => {
        this.dialogRef.close();
      },
      error: console.error,
    });
  }
}
