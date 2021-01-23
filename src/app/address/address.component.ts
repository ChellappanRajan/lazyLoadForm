import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, NgModule, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, Form, FormControl, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit,AfterViewInit, OnDestroy {


  address: FormControl;
  parentForm: FormGroup;
  constructor(private controlContainer: ControlContainer, private cdr: ChangeDetectorRef) {
    this.parentForm = this.controlContainer.control as FormGroup;
   }

  ngOnInit(): void {
    Promise.resolve().then(()=>{
      this.address = new FormControl();
      this.parentForm.addControl('address', this.address)
      this.parentForm.updateValueAndValidity();
    })
  }

  ngAfterViewInit(){
  }


  ngOnDestroy(): void {
    this.parentForm.removeControl('address');
    // this.parentForm.updateValueAndValidity({emitEvent: true});
    console.log('[AddressComponent] ngOnDestroy');
  }

}

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
