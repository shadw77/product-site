import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  productForm: FormGroup = new FormGroup({
    productName: new FormControl('', [Validators.required]),
    productEmail: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
      

    ]),
    productUser: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\S+$/),
    ]),
    productPass: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8}$/
      ),
    ]),
    productRePass: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8}$/),

    ]),
  });
  submitProductForm(){
    console.log(this.productForm);
  }
}
