import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { HeaderComponent } from './components/header/header.component';
import { ThemeService } from './services/theme.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterOutlet, HomeComponent, DetailComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.theme$.subscribe(theme => {
      document.body.classList.toggle('dark-theme', theme === 'dark');
    });
  }


}
