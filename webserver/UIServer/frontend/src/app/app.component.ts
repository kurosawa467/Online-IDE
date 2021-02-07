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

  constructor(public authService: AuthService, private http: HttpClient) {
  }
}
