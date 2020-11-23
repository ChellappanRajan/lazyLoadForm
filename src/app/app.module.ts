import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddressComponent } from './address/address.component';
import { NgFormDirective } from './ng-form.directive';
import {HttpClientModule
} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    // AddressComponent,
    NgFormDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
