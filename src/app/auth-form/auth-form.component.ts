import {
  Component,
  Output,
  EventEmitter,
  ContentChildren,
  QueryList,
  AfterViewInit,
  AfterContentInit,
  ViewChildren,
  ChangeDetectorRef,
  ViewChild,
  ElementRef
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
  @ViewChild('email') email: ElementRef;
  @ViewChildren(AuthMessageComponent) message: QueryList<AuthMessageComponent>;
  @ContentChildren(AuthRememberComponent) remember: QueryList<AuthRememberComponent>;
  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();
  showMessage: boolean;

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit() {
    console.log(this.email);
    this.email.nativeElement.setAttribute('placeholder', 'pass your email');
    this.email.nativeElement.classList.add('email');
    this.email.nativeElement.focus();
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
