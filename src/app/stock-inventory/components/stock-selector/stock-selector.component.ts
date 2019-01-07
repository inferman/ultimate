import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from '@angular/forms';
import { Product } from '../../models/product.interface';

@Component({
    selector: 'stock-selector',
    styleUrls: ['./stock-selector.component.scss'],
    template: `
        <div [formGroup]="parent" class="stock-selector">
            <div formGroupName="selector">
                <select formControlName="product_id">
                    <option value="">Select stock</option>
                    <option
                        *ngFor="let product of products"
                        [value]="product.id">
                        {{ product.name }}
                    </option>
                </select>
                <input
                    type="number"
                    min="10"
                    step="10"
                    max="1000"
                    formControlName="quantity">
                <button type="button">Add stock</button>
            </div>
        </div>
    `
})

export class StockSelectorComponent implements OnInit {
    @Input() parent: FormGroup;
    @Input() products: Product[];

    ngOnInit() {
        console.log(this.products);
        
    }
}