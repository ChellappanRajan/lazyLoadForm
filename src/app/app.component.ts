import { HttpParams } from '@angular/common/http';
import { Component, ComponentFactoryResolver, Injector, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lazyLoadForms';
  showAddressF = false;
  // @ViewChild('vcr', {read: ViewContainerRef}) vcr: ViewContainerRef;
  showAddressForm = false;
  form: FormGroup;
  constructor(private injector: Injector, private fb: FormBuilder, private cfr: ComponentFactoryResolver){
    this.form = this.fb.group({
      name: ''
    });
    this.form.valueChanges.subscribe(value => {
      console.log(value, 'value');
    });
  }

  // get formValue(){
  //   return this.form.value;
  // }

  showAddress() {
    this.showAddressF = !this.showAddressF;
    // console.log(this.formValue);
  }
}
