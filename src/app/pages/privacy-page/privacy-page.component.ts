import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-privacy-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacy-page.component.html',
  styleUrl: './privacy-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivacyPageComponent {}
