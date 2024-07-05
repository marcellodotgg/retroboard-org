import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PluralPipe } from '../../../../pipes/plural.pipe';
import { BoardService } from '../../../../services/board.service';
import { ColumnComponent } from '../column/column.component';
import { BoardSettingsDialogComponent } from '../dialogs/board-settings-dialog/board-settings-dialog.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, ColumnComponent, MatTooltipModule, PluralPipe, FormsModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardComponent {
  readonly dialog = inject(MatDialog);

  sortByVotes = false;

  board = computed(() => this.boardService.board()!);

  constructor(private readonly boardService: BoardService) {}

  isOwner(): boolean {
    return this.boardService.isOwner();
  }

  openBoardSettings(): void {
    this.dialog.open(BoardSettingsDialogComponent, { data: this.board(), autoFocus: false });
  }
}
