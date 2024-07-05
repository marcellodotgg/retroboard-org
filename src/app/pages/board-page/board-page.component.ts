import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, DestroyRef, OnDestroy, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { filter, switchMap } from 'rxjs';
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { BoardService } from '../../services/board.service';
import { WebsocketService } from '../../services/websocket.service';
import { BoardComponent } from './components/board/board.component';

@Component({
  selector: 'app-board-page',
  standalone: true,
  imports: [CommonModule, RouterModule, SpinnerComponent, BoardComponent],
  templateUrl: './board-page.component.html',
  styleUrl: './board-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardPageComponent implements OnInit, OnDestroy {
  loading = computed(() => !this.boardService.board());

  constructor(
    private readonly title: Title,
    private readonly boardService: BoardService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly websocketService: WebsocketService,
    private readonly destroy: DestroyRef,
  ) {
    this.activatedRoute.paramMap.pipe(switchMap((params) => this.boardService.get(params.get('id') ?? ''))).subscribe({
      next: (board) => {
        this.boardService.board.set(board);
        this.title.setTitle(`Retroboard | ${board.name}`);
        this.websocketService.connect(board.id);
      },
      error: console.error,
    });
  }

  ngOnInit(): void {
    this.websocketService.board$.pipe(takeUntilDestroyed(this.destroy), filter(Boolean)).subscribe(({ data }) => {
      this.boardService.board.set(JSON.parse(data));
    });
  }

  ngOnDestroy(): void {
    this.websocketService.disconnect();
    this.boardService.board.set(undefined);
  }
}
