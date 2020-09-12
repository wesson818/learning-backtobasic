import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { forbiddenNameValidator } from './shared/user-name.validator'
import { passwordValidator } from './shared/password.validator';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  
  constructor(private fb: FormBuilder, private _registrationService: RegistrationService) {}

  registrationForm: FormGroup;

  ngOnInit() {
  
    this.registrationForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/admin/)]],
      email: [''],
      subscribe: [false],
      password: [''],
      confirmPassword: [''],
      address: this.fb.group({
        city: [''],
        state: [''],
        postalCode: ['']
      }),
      alternateEmails: this.fb.array([])
    },{validators: passwordValidator})

  // registrationForm = new FormGroup({
  //     userName: new FormControl('Wen'),
  //     password: new FormControl(''),
  //     confirmPassword: new FormControl(''),
  //     address: new FormGroup({
  //       city: new FormControl(''),
  //       state: new FormControl(''),
  //       postalCode: new FormControl('')
  //     })
  // })

  // conditional validation
  this.registrationForm.get('subscribe').valueChanges
    .subscribe(checkedValue => {
      const email = this.registrationForm.get('email');
      if(checkedValue) {
        email.setValidators(Validators.required);
      } else {
        email.clearValidators();
      }
      email.updateValueAndValidity();
  })
  
}

  get userName() {
    return this.registrationForm.get('userName');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get alternateEmails() {
    return this.registrationForm.get('alternateEmails') as FormArray;
  }

  addAlternateEmails() {
    this.alternateEmails.push(this.fb.control(''))
  }


  loadAPIData() {
    // set some values
    this.registrationForm.patchValue({
      userName: 'Bruce',
      password: 'test',
      confirmPassword: 'test',
      address: {
        city: 'Melbourne',
        state: 'VIC',
        postalCode: '3000'
      }
    })
    // set all values
    // this.registrationForm.setValue({
    //   userName: 'Bruce',
    //   password: 'test',
    //   confirmPassword: 'test',
      // address: {
      //   city: 'City',
      //   state: 'State',
      //   postalCode: '1234'
      // }
    // })

  }

  onSubmit(){
    console.log(this.registrationForm.value);
    this._registrationService.register(this.registrationForm.value)
      .subscribe(
        data => {
          console.log("Success!", data)
          // this.successMsg = "Success! Form submitted"
        },
        error => console.log("Error!", error)
      )
  }
}
