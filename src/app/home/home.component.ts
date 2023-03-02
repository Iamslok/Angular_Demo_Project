import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products  = [
    {id:1,name: "Toy Car", price:100,description:'hrewhrwenrwenrjwenrweriweruwermasdk'},
    {id:2,name: "Toy Pen", price:200,description:'hrewhrwenrwenrjwenrweriweruwermasdk'},
    {id:3,name: "Toy Bike", price:300,description:'hrewhrwenrwenrjwenrweriweruwermasdk'},
    {id:4,name: "Toy motor", price:300,description:'hrewhrwenrwenrjwenrweriweruwermasdk'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
