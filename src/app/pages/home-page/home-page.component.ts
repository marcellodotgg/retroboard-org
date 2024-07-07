import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CreateBoardComponent } from './components/create-board/create-board.component';
import { PreviousBoardsComponent } from './components/previous-boards/previous-boards.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, CreateBoardComponent, PreviousBoardsComponent],
})
export class HomePageComponent {
  constructor(private readonly title: Title) {
    this.title.setTitle('Retroboard | Your Online Retroboard');
  }
}
