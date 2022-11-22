import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { storage } from '../utils';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn$ = new BehaviorSubject<boolean>(!!storage.getItem('App/session'));

  get isLoggedIn(): boolean {
    return this.isLoggedIn$.getValue();
  }

  login(): void {
    storage.setItem('App/session', { user: 'some-user-id', token: 'abc' });
    this.isLoggedIn$.next(true);
  }

  logout(): void {
    storage.removeItem('App/session');
    this.isLoggedIn$.next(false);
  }
}
