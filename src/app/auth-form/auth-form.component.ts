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
  ElementRef,
  Renderer2
} from '@angular/core';
import { User } from './auth-form.interface';
import { AuthRememberComponent } from './auth-remember.commponent';
import { AuthMessageComponent } from './auth-message.component';

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styles: [`
    .renderer-settings { border-color: #f00; }
  `]
})
export class AuthFormComponent implements AfterViewInit, AfterContentInit {
  @ViewChild('email') email: ElementRef;
  @ViewChildren(AuthMessageComponent) message: QueryList<AuthMessageComponent>;
  @ContentChildren(AuthRememberComponent) remember: QueryList<AuthRememberComponent>;
  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();
  showMessage: boolean;

  constructor(
    private cd: ChangeDetectorRef,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit() {
    console.log(this.email);
    this.renderer.setAttribute(this.email.nativeElement, 'placeholder', 'pass email');
    this.renderer.addClass(this.email.nativeElement, 'renderer-settings');
    this.renderer.selectRootElement(this.email.nativeElement).focus();
    // this.email.nativeElement.setAttribute('placeholder', 'pass your email');
    // this.email.nativeElement.classList.add('email');
    // this.email.nativeElement.focus();
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
