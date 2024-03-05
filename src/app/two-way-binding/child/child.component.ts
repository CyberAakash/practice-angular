import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MockapiService } from '../../mockapi.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent implements OnInit {
  constructor(private route: ActivatedRoute, public mockapi: MockapiService) {}

  // testId: string;
  product:any

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const testId = params['id']; // Access the 'id' parameter from the URL
      console.log('Test ID:', testId);
      // this.mockapi.getProduct().subscribe((res: any) => {
      //   console.log(res);
      //   this.product = res.filter((product: any) => product.id === testId);
      //   console.log(this.product);
      // });
      this.mockapi.getSingleProduct(testId).subscribe((res: any) => {
        console.log(res);
        this.product = res;
        console.log(this.product);
      })
    });
  }
}
