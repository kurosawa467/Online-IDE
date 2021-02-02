import { Injectable } from '@angular/core';
import {ReplaySubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {User} from "./user";

const LOGIN_PATH = '/login';
const LOGOUT_PATH = '/logout';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authenticated$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);
  private username: String;

  public get authenticated(): ReplaySubject<boolean> {
    return this.authenticated$;
  }

  constructor(private httpClient: HttpClient, private router: Router) {
    this.checkAuthentication();
  }

  public checkAuthentication() {
    this.httpClient.get<User>('/authenticated').subscribe((currentUser) => {
      this.authenticated$.next(currentUser.authenticated);
      this.username = currentUser.username;
    }, (err) => {
      this.authenticated$.next(false);
      this.username = "";
    });
  }

  public getUsername(): String {
    return this.username;
  }

  public login(): void {
    window.location.href = `${window.location.origin}${LOGIN_PATH}`;
  }

  public logout(): void {
    this.httpClient.post(LOGOUT_PATH, {}).pipe().subscribe(() => {
      console.log('auth.service.ts, logout()');
      this.router.navigateByUrl('/');
      this.checkAuthentication();
    });
  }
}
