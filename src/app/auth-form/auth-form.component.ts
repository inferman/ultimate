import { Component, Output, EventEmitter, ContentChildren, QueryList, AfterViewInit } from '@angular/core';
import { User } from './auth-form.interface';
import { AuthRememberComponent } from './auth-remember.commponent'

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements AfterViewInit {
  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();
  @ContentChildren(AuthRememberComponent) remember: QueryList<AuthRememberComponent>;
  showMessage: boolean;

  ngAfterViewInit() {
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
