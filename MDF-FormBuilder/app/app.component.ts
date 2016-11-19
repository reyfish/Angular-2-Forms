import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl : 'app/app.component.html'
})
export class AppComponent  { 
  onFormStatusChange(value){
    console.log(value);
  }
}
