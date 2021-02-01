import { Component } from '@angular/core';
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UI';
  currentUsername = '';

  ngOnInit(): void {
    this.initiateCurrentUsername();
  }

  constructor(public authService: AuthService, private http: HttpClient) {
  }

  getCurrentUsername(): Observable<String> {
    return this.http.get<String>('/getUsername').pipe();
  }

  initiateCurrentUsername() {
    this.getCurrentUsername().subscribe((currentUsername) => {
      this.currentUsername = currentUsername.valueOf();
      console.log("Getting current username " + this.currentUsername);
    });
  }

  getUsername() {
    return this.currentUsername;
  }
}
