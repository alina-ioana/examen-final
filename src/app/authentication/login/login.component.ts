import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../helpers/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    // TODO: init form (username/password)
  }

  login(): void {
    // TODO: ...
  }

}
