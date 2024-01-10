import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { PhoneInputComponent } from './phone-input/phone-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule, PhoneInputComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angcontrolaccessor';

  
  //create a basic form
  public postForm = new FormGroup({
    title: new FormControl<string | null>("", {validators:[Validators.required], nonNullable: true}),
    description: new FormControl<string | null>("", {validators:[Validators.required], nonNullable: true}),
    phone: new FormControl<string | null>("", {validators:[Validators.required], nonNullable: true}),
  });

  addPost = () => {
    console.log("ADDING POST")
  }




  ngOnInit(): void {
  
    console.log(this.postForm.getRawValue)
    

  }

}
