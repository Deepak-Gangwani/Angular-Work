import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'validation2';
  form=new FormGroup({
    // Using form Group module and using 3 input validation messagethe form control features for validation
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    // adding single validation then don't need array for square brackets
    body: new FormControl('', Validators.required),
  });

  get f(){
    return this.form.controls;
  }
  submit(){
    console.log(this.form.value);
  }
}
