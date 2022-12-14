import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { LayoutHorizontalComponent } from './layouts/layout-horizontal/layout-horizontal.component';
import { AuthService, ThemeService } from './shared/services';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, LayoutHorizontalComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isLoggedIn$!: Observable<boolean>;

  constructor(
    private _authService: AuthService,
    private _themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this._authService.isLoggedIn$;

    this._themeService.init();
  }
}
