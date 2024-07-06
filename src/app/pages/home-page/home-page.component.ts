import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, PLATFORM_ID, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { AutoCompleteCompleteEvent, AutoCompleteModule, AutoCompleteSelectEvent } from 'primeng/autocomplete';
import { finalize } from 'rxjs';
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { Board } from '../../models/board.model';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SpinnerComponent, RouterModule, AutoCompleteModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  private readonly platformId = inject(PLATFORM_ID);

  createBoardForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
  });
  previousBoardsForm = new FormGroup({
    name: new FormControl(''),
  });

  creatingBoard = signal(false);
  boards = signal<Board[]>([]);
  filteredBoards = signal<Board[]>([]);

  get boardName(): string {
    return this.createBoardForm.get('name')?.value ?? '';
  }

  constructor(
    private readonly title: Title,
    private readonly boardService: BoardService,
    private readonly router: Router,
  ) {
    this.title.setTitle('Retroboard | Your Online Retroboard');

    this.boardService.getMyBoards().subscribe((boards) => {
      this.boards.set(boards);
    });
  }

  createBoard(): void {
    this.creatingBoard.set(true);

    this.boardService
      .create(this.boardName)
      .pipe(finalize(() => this.creatingBoard.set(false)))
      .subscribe({
        next: (board) => {
          this.boardService.board.set(board);
          this.router.navigate(['boards', board.id]);
        },
        error: console.error,
      });
  }

  filterBoards(event: AutoCompleteCompleteEvent): void {
    const boards = this.boards();
    this.filteredBoards.set(
      boards.filter((board) => board.name.toLocaleLowerCase().includes(event.query.toLocaleLowerCase())),
    );
  }

  goToBoard(event: AutoCompleteSelectEvent): void {
    this.router.navigate(['boards', (event.value as Board).id]);
  }
}
