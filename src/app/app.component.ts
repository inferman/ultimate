import { Component } from '@angular/core';
import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  remember: boolean = false;

  createUser(user: User) {
    console.log('Create account', user)
  }

  loginUser(user: User) {
    const userNew: any = Object.assign({}, user);
    userNew.remember = this.remember;
    console.log('Login', user, userNew, this.remember)
  }

  rememberUser(remember: boolean) {    
    this.remember = remember;
  }
}
