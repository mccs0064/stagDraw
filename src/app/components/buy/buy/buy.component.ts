import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FromEventTarget } from 'rxjs/internal/observable/fromEvent';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {

  checkoutForm = this.formBuilder.group({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    ticket: ''
  });

  formSubmitted = false;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('submitted');
    console.log(this.checkoutForm.value)
    console.log(this.checkoutForm.valid);
    this.http.post('https://formsubmit.co/ajax/54cd5d1bf9afc2b02df9e436fbdfdcb5',this.checkoutForm.value).subscribe(
      (val: any) => {
        if(val.success) {
          this.formSubmitted=true;
        }
      }
    )
  }

}
