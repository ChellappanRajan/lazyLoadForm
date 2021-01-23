import { HttpParams } from '@angular/common/http';
import { ChangeDetectorRef, Component, ComponentFactoryResolver, Injector, NgZone, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lazyLoadForms';
  showAddressF = false;
  showAddressForm = false;
  form: FormGroup;

  constructor(private cdr:ChangeDetectorRef,private injector: Injector,private zone:NgZone, private fb: FormBuilder, private cfr: ComponentFactoryResolver){
    this.form = this.fb.group({
      name: ''
    });
    this.form.valueChanges.subscribe(value => {
      // console.log(value, 'value');
      // this.cdr.detectChanges();
    });
  }

  showAddress() {
    this.showAddressF = !this.showAddressF;
  }

}
