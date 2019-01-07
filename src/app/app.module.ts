import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StockInventoryModule } from './stock-inventory/stock-inventory.module'

import { AppComponent } from './app.component';
// import { AuthFormModule } from './auth-form/auth-form.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // AuthFormModule
    StockInventoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
