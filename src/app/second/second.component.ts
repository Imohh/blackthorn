import { Component, OnInit } from '@angular/core';
import { FirstComponent } from '../first/first.component';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  selectedAmount: any = '';

  changeHandler (event: any) {
    this.selectedAmount = event.target.value;
  }

  //VIP Alumni ticket
  selectedAmount2: any = '';

  changeHandler2 (event: any) {
    this.selectedAmount2 = event.target.value;
  }

  // Book
  selectedAmount3: any = '';

  changeHandler3 (event: any) {
    this.selectedAmount3 = event.target.value;
  }

  // Donation
  selectedAmount4: any = '';

  changeHandler4 (event: any) {
    this.selectedAmount4 = event.target.value;
  }

  posts: any = [
    {
      "title": "hey there",
      "amount": 3500,
      "amount3": 17.99,
      "taxes": 289.42,
      "donation": [50,100,200,500]
    }
  ];

  total = this.posts.amount2;


  ImagePath: string;

  constructor() {
    this.ImagePath = '../../assets/img/Vector.png';
  }

  ngOnInit() {
  }

}
