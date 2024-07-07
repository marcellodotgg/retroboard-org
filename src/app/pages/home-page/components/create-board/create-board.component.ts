import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { finalize } from 'rxjs';
import { SpinnerComponent } from '../../../../components/spinner/spinner.component';
import { AnalyticsService } from '../../../../services/analytics.service';
import { BoardService } from '../../../../services/board.service';

@Component({
  selector: 'app-create-board',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SpinnerComponent, RouterModule],
  templateUrl: './create-board.component.html',
  styleUrl: './create-board.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateBoardComponent {
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
  });

  creatingBoard = signal(false);

  get boardName(): string {
    return this.form.get('name')?.value ?? '';
  }

  constructor(
    private readonly boardService: BoardService,
    private readonly analytics: AnalyticsService,
    private readonly router: Router,
  ) {}

  createBoard(): void {
    this.creatingBoard.set(true);

    this.boardService
      .create(this.boardName)
      .pipe(finalize(() => this.creatingBoard.set(false)))
      .subscribe({
        next: (board) => {
          this.analytics.boardCreated(board);
          this.boardService.board.set(board);
          this.router.navigate(['boards', board.id]);
        },
        error: console.error,
      });
  }
}
