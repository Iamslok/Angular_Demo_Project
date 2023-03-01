import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products  = [
    {name: "Toy Car", price:100,description:'hrewhrwenrwenrjwenrweriweruwermasdk'},
    {name: "Toy Pen", price:200,description:'hrewhrwenrwenrjwenrweriweruwermasdk'},
    {name: "Toy Bike", price:300,description:'hrewhrwenrwenrjwenrweriweruwermasdk'},
    {name: "Toy motor", price:300,description:'hrewhrwenrwenrjwenrweriweruwermasdk'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
