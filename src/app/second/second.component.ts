import { Component, OnInit } from '@angular/core';
import { FirstComponent } from '../first/first.component';
import { DataService } from '../data.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

  // Base Ticket
  selectedAmount5: any = '';

  changeHandler5 (event: any) {
    this.selectedAmount5 = event.target.value;
  }

  posts: any = [
    {
      "title": "hey there",
      "amount": 3500,
      "amount3": 17.99,
      "amount4": 95.99,
      "taxes": 289.42,
      "donation": [50,100,200,500]
    }
  ];

  total = this.posts.amount2;


  ImagePath: string;

  constructor(private data:DataService) {
    this.ImagePath = '../../assets/img/Vector.png';
  }

  forth:any;
  first:any;
  second:any;
  third:any;
  fifth:any;
  sixth:any;
  test:any;



  ngOnInit() {
    this.forth = this.data.forth;
    this.first = this.data.first;
    this.third = this.data.third;
    this.fifth = this.data.fifth;
    this.sixth = this.data.sixth;
    this.test = this.data.test;
  }

}
