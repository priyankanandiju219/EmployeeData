import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-creation',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './form-creation.component.html',
  styleUrl: './form-creation.component.scss'
})

export class FormCreationComponent implements OnInit{
  userFrom!: FormGroup;
  UserData:any;
  data : any;
  radioItems : any = [];
  theCheckbox : boolean = false; 

  constructor(private fb : FormBuilder, public http : HttpClient) {}
  @Input() formData: any;

  ngOnInit(){
    //   first_name: new FormControl(null, [
    //     Validators.required,
    //     Validators.minLength(1),
    //     Validators.maxLength(250),
    //     // Validators.pattern("^[A-Za-z'-]+$")
    //   ]),
    //   last_name: new FormControl(null, [
    //     Validators.maxLength(10),
    //     Validators.pattern("^[A-Za-z'-]+$")
    //   ]),
    //   date_of_birth: new FormControl(null, [
    //     Validators.maxLength(10),
    //     Validators.pattern("^[A-Za-z'-]+$")

    //   ]),
    //   gender: new FormControl(null, [
    //     Validators.maxLength(10),
    //     Validators.pattern("^[A-Za-z'-]+$")

    //   ]),
    //   interest: new FormControl(null, [
    //     Validators.maxLength(10),
    //     Validators.pattern("^[A-Za-z'-]+$")
    //   ]),
    //   sate: new FormControl(null, [
    //     Validators.maxLength(10),
    //     Validators.pattern("^[A-Za-z'-]+$")

    //   ]),
    //   skills: new FormControl(null, [
    //     Validators.maxLength(10),
    //     Validators.pattern("^[A-Za-z'-]+$")

    //   ]),
    //   date_of_joining: new FormControl(null, [
    //     Validators.maxLength(10),
    //     Validators.pattern("^[A-Za-z'-]+$")

    //   ]),
    // });    
  }



onSubmit(){
  console.log(this.userFrom.value);
}
}
