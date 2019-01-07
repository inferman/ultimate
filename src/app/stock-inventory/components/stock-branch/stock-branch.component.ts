import { Component, Input } from "@angular/core";
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'stock-branch',
    styleUrls: ['./stock-branch.component.scss'],
    template: `
        <div [formGroup]="parent" class="stock-branch">
            <div formGroupName="store" class="stock-inventory__controls">
                <input 
                    type="text"
                    placeholder="Branch ID"
                    name="branch"
                    formControlName="branch">
                <input 
                    type="text" 
                    placeholder="Manager Code" 
                    name="code"
                    formControlName="code">
            </div>
        </div>
    `
})

export class StockBranchComponent {
    @Input() parent: FormGroup;
}