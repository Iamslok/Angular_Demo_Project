import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id:any
  productArray: any[]=[]
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((pram)=>{
      if(pram){
        this.id = pram['productId'];
        console.log(this.id);
        this.getData()
      }
    })
  }

  getData(){
    debugger
    switch (+this.id){
      case 1: {
        this.productArray.push({id:1,name: "Toy Car", price:100,description:'hrewhrwenrwenrjwenrweriweruwermasdk'});
        break;
      }
      case 2: {
        this.productArray.push({id:2,name: "Toy Car", price:200,description:'hrewhrwenrwenrjwenrweriweruwermasdk'})
        break;
      }
    }

    console.log(this.productArray)
    
  }

}
