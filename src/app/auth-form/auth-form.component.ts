import {
  Component,
  Output,
  EventEmitter,
  ContentChildren,
  QueryList,
  AfterViewInit,
  AfterContentInit,
  ViewChild
} from '@angular/core';
import { User } from './auth-form.interface';
import { AuthRememberComponent } from './auth-remember.commponent';
import { AuthMessageComponent } from './auth-message.component';

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements AfterViewInit, AfterContentInit {
  @ViewChild(AuthMessageComponent) message: AuthMessageComponent;
  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();
  @ContentChildren(AuthRememberComponent) remember: QueryList<AuthRememberComponent>;
  showMessage: boolean;

  ngAfterContentInit() {
    if (this.message) {
      this.message.days = 30;
    }
    
    if (this.remember) {
      this.remember.forEach((item: AuthRememberComponent) => {
        item.checked.subscribe((checked: boolean) => this.showMessage = checked );
      });
    };    
  }

  ngAfterViewInit() {
    // console.log(this.message);    
  }

  onSubmit(value: User) {  
    this.submitted.emit(value);
  }

}
