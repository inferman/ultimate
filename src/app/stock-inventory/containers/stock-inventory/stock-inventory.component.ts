import { Component } from "@angular/core";
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'stock-inventory',
    styleUrls: ['./stock-inventory.component.scss'],
    templateUrl: 'stock-inventory.component.html'
})

export class StockInventoryComponent {
    form = new FormGroup({
        store: new FormGroup({
            branch: new FormControl('B182'),
            code: new FormControl('1234')
        })
    })

    onSubmit() {
        console.log('onSubmit', this.form.value);

    }
}