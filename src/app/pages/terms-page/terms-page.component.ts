import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-terms-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './terms-page.component.html',
  styleUrl: './terms-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TermsPageComponent {}
