import {
  Component,
  Output,
  EventEmitter,
  ContentChildren,
  QueryList,
  AfterViewInit,
  AfterContentInit,
  ViewChildren,
  ChangeDetectorRef
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
  @ViewChildren(AuthMessageComponent) message: QueryList<AuthMessageComponent>;
  @ContentChildren(AuthRememberComponent) remember: QueryList<AuthRememberComponent>;
  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();
  showMessage: boolean;

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit() {
    if (this.message) {
      this.message.forEach( message => message.days = 30 );
    }
    this.cd.detectChanges();
  }

  ngAfterContentInit() {
    if (this.remember) {
      this.remember.forEach((item: AuthRememberComponent) => {
        item.checked.subscribe((checked: boolean) => this.showMessage = checked );
      });
    };    
  }

  onSubmit(value: User) {  
    this.submitted.emit(value);
  }

}
