import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit, OnDestroy {
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

  selectedInput: any = '';

  myFunc(event: any) {
    this.selectedInput = event.target.value;
  }

  // test2
  selectedAmount6: any = '';

  changeHandler6 (event: any) {
    this.selectedAmount6 = event.target.value;
  }
  
  posts: any = [
    {
      "title": "hey there",
      "amount": 3500,
      "amount2": 191.98,
      "amount3": 17.99,
      "amount4": 95.99,
      "taxes": 289.42,
      "donation": [50,100,200,500]
    }
  ];

  total:string = this.posts.amount;


  



  constructor(private data:DataService) {}

  first:any;
  second:any;
  third:any;
  forth:any;
  fifth:any;
  sixth:any;
  test:any;

  userObject = {
    name: true
  }

  isDisplay = false;
  toggleDisplay() {
    this.isDisplay = !this.isDisplay;
  }

  isDisplays = false;
  toggleDisplays() {
    this.isDisplays = !this.isDisplays;
  }


  ngOnInit() {
  }

  

  // selectedAmount5: any = '';

  // changeHandler5 (event: any) {
  //   this.selectedAmount5 = event.target.value;
  // }

  
  ngOnDestroy() {
    this.data.first = this.first;
    this.data.third = this.third;
    this.data.forth = this.forth;
    this.data.fifth = this.fifth;
    this.data.sixth = this.sixth;
    this.data.test = this.test;
  }

}
