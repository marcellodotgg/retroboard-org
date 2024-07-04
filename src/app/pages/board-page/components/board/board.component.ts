import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BoardService } from '../../../../services/board.service';
import { ColumnService } from '../../../../services/column.service';
import { ColumnComponent } from '../column/column.component';
import { BoardSettingsDialogComponent } from '../dialogs/board-settings-dialog/board-settings-dialog.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, ColumnComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardComponent {
  readonly dialog = inject(MatDialog);

  board = computed(() => this.boardService.board()!);

  constructor(
    private readonly boardService: BoardService,
    private readonly columnService: ColumnService,
  ) {}

  isOwner(): boolean {
    return this.boardService.isOwner();
  }

  openBoardSettings(): void {
    this.dialog.open(BoardSettingsDialogComponent, { data: this.board(), autoFocus: false });
  }
}
