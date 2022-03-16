import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registerForm: FormGroup;
  constructor() { }

  ngOnInit()  {
    this.registerForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null, [Validators.required]),
      //mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    }, this.passwordMatchValidator);

    //this.registerForm.controls['userName'].setValue('Default Value');
  }


  passwordMatchValidator(fg: AbstractControl){
    return fg.get('password')?.value === fg.get('confirmPassword')?.value ? null : {notmatched: true};
  }

  get userName(){
    return this.registerForm.get('userName') as FormControl
  }

  get email(){
    return this.registerForm.get('email') as FormControl
  }

  get password(){
    return this.registerForm.get('password') as FormControl
  }

  get conformPassword(){
    return this.registerForm.get('confirmPassword') as FormControl
  }

 
  onSubmit(){
    console.log(this.registerForm);
  }
}
