import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'my-form',
  templateUrl : 'app/form.component.html'
})
export class FormComponent implements OnInit { 

    userForm: FormGroup;
    showCity: boolean = true;
    @Output() formStatusChange = new EventEmitter<boolean>();
    $formValidChanges; 

    constructor(private _formBuilder: FormBuilder) {
 
    }

    formValidChanges(){
        console.log(this.userForm.valid);
    }

    ngOnInit(){
        this.userForm = this._formBuilder.group({
            name:['Alex', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
            email: [],
            address:this._formBuilder.group({
            street: [],
            city: ['Richmond Hill', [Validators.required]],
            postalcode: [null,[Validators.pattern('^[1-9][0-9]{4}$')]]
            })
        })
        this.userForm.statusChanges.subscribe(value=>{
            console.log(value);
            this.formStatusChange.emit(value);
        });  
    }

    onSubmit(){
        console.log(this.userForm.value);    
    }

    onClick(){
        this.showCity = !this.showCity;
        if (!this.showCity) (<FormGroup>this.userForm.controls['address']).controls['city'].disable()
        else (<FormGroup>this.userForm.controls['address']).controls['city'].enable();
        console.log((<FormGroup>this.userForm.controls['address']).controls['city']);
    }    
}