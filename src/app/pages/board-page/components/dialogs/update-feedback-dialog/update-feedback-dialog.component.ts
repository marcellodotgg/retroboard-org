import { DialogRef } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Feedback } from '../../../../../models/feedback.model';
import { FeedbackService } from '../../../../../services/feedback.service';

@Component({
  selector: 'app-update-feedback-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatDialogModule],
  templateUrl: './update-feedback-dialog.component.html',
  styleUrl: './update-feedback-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateFeedbackDialogComponent {
  form = new FormGroup({
    description: new FormControl(this.data.description, [Validators.required]),
  });

  private get description(): string {
    return this.form.get('description')?.value ?? '';
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Feedback,
    private readonly dialogRef: DialogRef,
    private readonly feedbackService: FeedbackService,
  ) {}

  updateFeedback(): void {
    this.feedbackService.update({ ...this.data, description: this.description }).subscribe({
      next: () => {
        this.dialogRef.close();
      },
      error: console.error,
    });
  }
}
