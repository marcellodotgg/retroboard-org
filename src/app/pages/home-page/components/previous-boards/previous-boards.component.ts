import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AutoCompleteCompleteEvent, AutoCompleteModule, AutoCompleteSelectEvent } from 'primeng/autocomplete';
import { Board } from '../../../../models/board.model';
import { BoardService } from '../../../../services/board.service';

@Component({
  selector: 'app-previous-boards',
  standalone: true,
  imports: [CommonModule, RouterModule, AutoCompleteModule, ReactiveFormsModule],
  templateUrl: './previous-boards.component.html',
  styleUrl: './previous-boards.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreviousBoardsComponent {
  form = new FormGroup({
    name: new FormControl(''),
  });

  boards = signal<Board[]>([]);
  filteredBoards = signal<Board[]>([]);

  constructor(
    private readonly boardService: BoardService,
    private readonly router: Router,
  ) {
    this.boardService.getMyBoards().subscribe((boards) => {
      this.boards.set(boards);
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
