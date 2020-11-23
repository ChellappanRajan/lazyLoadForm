
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AddressComponent } from './address.component';

@NgModule({
  declarations: [
    AddressComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
class AddressModule { }
