import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My-App';

  sum=0;
  count = 5;
  number1 = 0;
  number2 = 0;
  res = () => {
    this.sum=this.number1+this.number2;
  }
  Increment = () => {
    this.count++;
  }
  Decrement = () => {
    this.count--;
  }

  list = [12, 13, 14, 15, 16, 17];
  list2 = ["abc", "def", "ghi", "jkh"]
}
