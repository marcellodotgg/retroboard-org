import { DialogRef } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Router, RouterModule } from '@angular/router';
import { Board } from '../../../../../models/board.model';
import { BoardService } from '../../../../../services/board.service';

@Component({
  selector: 'app-board-settings-dialog',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, MatDialogModule],
  templateUrl: './board-settings-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardSettingsDialogComponent {
  form = new FormGroup({
    name: new FormControl(this.data.name, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
  });

  get name(): string {
    return this.form.get('name')?.value ?? '';
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Board,
    private readonly dialogRef: DialogRef,
    private readonly boardService: BoardService,
    private readonly router: Router,
  ) {}

  update(): void {
    this.boardService.update(this.data.id, { name: this.name }).subscribe({
      next: () => {
        this.dialogRef.close();
      },
      error: console.error,
    });
  }

  deleteBoard(): void {
    if (confirm('Are you sure you want to delete this board?')) {
      this.boardService.destroy(this.data.id).subscribe({
        next: () => {
          this.dialogRef.close();
          this.router.navigate(['']);
        },
        error: console.error,
      });
    }
  }
}
