import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'auth-remember',
    template: `
        <label>
            <input type="checkbox" (change)="onChanged($event.target.checked)" name="remember" ngModel>
            Keep me logged in
        </label>
    `
})

export class AuthRememberComponent {
    @Output() checked: EventEmitter<boolean> = new EventEmitter<boolean>();

    onChanged(ev: boolean) {
        this.checked.emit(ev);
    }
}