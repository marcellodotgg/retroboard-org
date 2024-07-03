import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { switchMap } from 'rxjs';
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { BoardService } from '../../services/board.service';
import { BoardComponent } from './components/board/board.component';

@Component({
  selector: 'app-board-page',
  standalone: true,
  imports: [CommonModule, RouterModule, SpinnerComponent, BoardComponent],
  templateUrl: './board-page.component.html',
  styleUrl: './board-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardPageComponent {
  loading = computed(() => !this.board());
  board = computed(() => this.boardService.board());

  constructor(
    private readonly title: Title,
    private readonly boardService: BoardService,
    private readonly activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.paramMap.pipe(switchMap((params) => this.boardService.get(params.get('id') ?? ''))).subscribe({
      next: (board) => {
        this.boardService.board.set(board);
        this.title.setTitle(`Retroboard | ${board.name}`);
      },
      error: console.error,
    });
  }
}
