import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private theme = new BehaviorSubject<string>('light');
  theme$ = this.theme.asObservable();

  setTheme(theme: string): void {
    this.theme.next(theme);
  }

  getTheme(): string {
    return this.theme.value;
  }
}
