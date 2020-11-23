import {
  ComponentFactoryResolver,
  Input,
  Directive,
  Injector,
  ViewContainerRef,
  OnChanges,
  SimpleChanges,
  AfterViewInit,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { ControlContainer, FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Directive({
  selector: '[appNgForm]',
})
export class NgFormDirective implements OnInit, OnDestroy {
  showAddressForm = false;
  form: FormGroup;
  appNgForm$ = new BehaviorSubject<boolean>(false);

  @Input() set appNgForm(value) {
    this.appNgForm$.next(value);
  }

  constructor(
    private injector: Injector,
    private vcr: ViewContainerRef,
    private fb: FormBuilder,
    private cfr: ComponentFactoryResolver
  ) {
    // console.log(this.injector.get(ControlContainer));
  }


  ngOnInit(): void {
    this.appNgForm$.subscribe((value) => {
      if (value) {
        console.log('[NgFormDirective] ngOnInit');
        this.showAddress();
      } else {
        console.log('[NgFormDirective] vcr clear');
        this.vcr.clear();
      }
    });
  }

  async showAddress(): Promise<void> {
    this.showAddressForm = true;
    const { AddressComponent } = await import('./address/address.component');
    const cmpFac = this.cfr.resolveComponentFactory(AddressComponent);
    const { instance } = this.vcr.createComponent(cmpFac, null, this.injector);
  }

  ngOnDestroy(): void {
    console.log('[NgFormDirective] ngOnDestroy');
  }
}
