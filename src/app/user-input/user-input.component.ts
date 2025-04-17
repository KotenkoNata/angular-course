import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';


  onSubmit(){
    console.log('onSubmit');
    console.log('this. enteredInitialInvestment', this.enteredInitialInvestment);
    console.log('this. enteredAnnualInvestment', this.enteredAnnualInvestment);
    console.log('this. enteredExpectedReturn', this.enteredExpectedReturn);
    console.log('this. enteredDuration', this.enteredDuration);
  }
}
