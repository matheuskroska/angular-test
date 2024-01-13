import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, MatToolbarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private themeService: ThemeService) { }

  toggleTheme(): void {
    const newTheme = this.themeService.getTheme() === 'light' ? 'dark' : 'light';
    this.themeService.setTheme(newTheme);
  }
}
