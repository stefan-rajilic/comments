import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import Token from '../Token';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  private email = '';
  private password = '';
  private url = 'http://85.160.64.233:3000/session/login';


  constructor(private httpClient: HttpClient, private router: Router) { }

  clickMe() {
    this.httpClient.post(this.url, {

      email: this.email,
      password: this.password,

    }).subscribe(
      (data: any) => {
        Token.token = data.access_token;
        this.router.navigate(['/logged-in']);
      }, (error) => {
      }
    );
  }

  ngOnInit() {
  }

}
