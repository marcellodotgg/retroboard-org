import { DialogRef } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Column } from '../../../../../models/column.model';
import { FeedbackService } from '../../../../../services/feedback.service';
import { WebsocketService } from '../../../../../services/websocket.service';

@Component({
  selector: 'app-create-feedback-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatDialogModule],
  templateUrl: './create-feedback-dialog.component.html',
  styleUrl: './create-feedback-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateFeedbackDialogComponent {
  form = new FormGroup({
    description: new FormControl('', [Validators.required]),
  });

  private get description(): string {
    return this.form.get('description')?.value ?? '';
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Column,
    private readonly dialogRef: DialogRef,
    private readonly feedbackService: FeedbackService,
    private readonly websocketService: WebsocketService,
  ) {}

  createFeedback(): void {
    this.feedbackService.create(this.data.id, this.description).subscribe({
      next: () => {
        this.dialogRef.close();
      },
      error: console.error,
    });
  }
}
