import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Comment } from '../../../../models/comment.model';
import { Feedback } from '../../../../models/feedback.model';
import { AuditService } from '../../../../services/audit.service';
import { BoardService } from '../../../../services/board.service';
import { FeedbackService } from '../../../../services/feedback.service';
import { CreateCommentDialogComponent } from '../dialogs/create-comment-dialog/create-comment-dialog.component';
import { UpdateCommentDialogComponent } from '../dialogs/update-comment-dialog/update-comment-dialog.component';
import { UpdateFeedbackDialogComponent } from '../dialogs/update-feedback-dialog/update-feedback-dialog.component';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatTooltipModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedbackComponent {
  readonly dialog = inject(MatDialog);

  feedback = input.required<Feedback>();

  isOwner = computed(() => this.feedback().created_by === this.auditService.whoAmI() || this.boardService.isOwner());
  alreadyVoted = computed(() => {
    return this.feedback().votes?.some((vote) => vote.created_by === this.auditService.whoAmI()) ?? false;
  });

  constructor(
    private readonly feedbackService: FeedbackService,
    private readonly auditService: AuditService,
    private readonly boardService: BoardService,
  ) {}

  toggleVote(): void {
    if (this.alreadyVoted()) {
      this.feedbackService.unvoteFor(this.feedback().id).subscribe();
    } else {
      this.feedbackService.voteFor(this.feedback().id).subscribe();
    }
  }

  openUpdateFeedbackDialog(): void {
    this.dialog.open(UpdateFeedbackDialogComponent, { data: this.feedback() });
  }

  openCreateCommentDialog(): void {
    this.dialog.open(CreateCommentDialogComponent, { data: this.feedback() });
  }

  openUpdateCommentDialog(comment: Comment): void {
    this.dialog.open(UpdateCommentDialogComponent, { data: comment });
  }

  destroy(): void {
    if (confirm('Are you sure you want to permanently delete this feedback?')) {
      this.feedbackService.destroy(this.feedback().id).subscribe();
    }
  }

  destroyComment(id: string): void {
    if (confirm('Are you sure you want to permanently delete this comment?')) {
      this.feedbackService.destroyComment(id).subscribe();
    }
  }

  isCommentOwner(comment: Comment): boolean {
    return comment.created_by === this.auditService.whoAmI() || this.boardService.isOwner();
  }
}
