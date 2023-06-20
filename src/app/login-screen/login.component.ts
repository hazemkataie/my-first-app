import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  username: string = '';
  password: string = '';
  message: string = '';
  messageColor: string = '';

  login() {
    if (this.username.trim() === '') {
      alert('Please enter USERNAME');
      return;
    }

    if (this.password === 'Hazem') {
      this.message = 'PASSWORD CORRECT';
      this.messageColor = 'green';
    } else {
      this.message = 'WRONG PASSWORD';
      this.messageColor = 'red';
    }
  }
}
