import { Component, OnInit } from '@angular/core';
import { MockapiService } from '../mockapi.service';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrl: './two-way-binding.component.css',
})
export class TwoWayBindingComponent implements OnInit {
  products: any;
  constructor(public mockapi: MockapiService) {}
  ngOnInit(): void {
    this.mockapi.getProduct().subscribe((res: any) => {
      console.log(res);
      this.products = res;
      console.log(this.products);
    });
    this.getLength();
  }

  searchText: string = 'demo';
  filterProducts: any;

  searchProduct() {
    this.filterProducts = this.products.filter((product: any) => {
      return product.name.toLowerCase().includes(this.searchText.toLowerCase());
    });
    console.log(this.filterProducts);
  }

  getLength() {
    console.log(this.filterProducts.length);
    return this.filterProducts.length;
  }
}
