import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';

  constructor() { }

  ngOnInit(): void {
  }
  handleForm(): void {
    console.log(this.email);
  }



}
