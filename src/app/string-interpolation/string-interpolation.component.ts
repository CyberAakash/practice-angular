import { Component, OnInit } from '@angular/core';
import { MockapiService } from '../mockapi.service';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrl: './string-interpolation.component.css',
})
export class StringInterpolationComponent implements OnInit {
  products: any
  // name: string = "Mac m1"
  // price: number = 999

  // color:string = "#fff"
  constructor(public mockapi: MockapiService) {}

  ngOnInit(): void {
      this.mockapi.getProduct().subscribe((res: any) => {
        console.log(res)
        this.products = res
        console.log(this.products);
      })
  }
}
