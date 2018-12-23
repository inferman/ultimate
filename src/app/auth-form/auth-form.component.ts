import {
  Component,
  Output,
  EventEmitter
} from '@angular/core';
import { User } from './auth-form.interface';

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styles: [`
    .renderer-settings { border-color: #f00; }
  `]
})
export class AuthFormComponent {
  title = 'Login';
  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();
  constructor() {}

  onSubmit(value: User) {  
    this.submitted.emit(value);
  }

}
