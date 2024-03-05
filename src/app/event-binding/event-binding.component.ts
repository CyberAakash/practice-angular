import { Component, OnInit } from '@angular/core';
import { MockapiService } from '../mockapi.service';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css',
})
export class EventBindingComponent implements OnInit {
  products: any;
  constructor(public mockapi: MockapiService) {}

  ngOnInit(): void {
    this.mockapi.getProduct().subscribe((res: any) => {
      console.log(res);
      this.products = res;
      console.log(this.products);
    });
  }

  onNameChange(event:any, id:any) {
    console.log(event);
    console.log(id);
    this.products[id].name = event.target.value;
  }

  update(id:any, data:any) {
    console.log(id);
    console.log(data);
    // Creating a new object without the id property
    const newData = { ...data };
    delete newData.id;

    // Now you can pass newData without the id property
    console.log(newData);
    this.mockapi.updateProduct(id, newData).subscribe((x: any) => {
      console.log(x);
      // this.products = res;
      // console.log(this.products);
      this.mockapi.getProduct().subscribe((res: any) => {
        console.log(res);
        this.products = res;
        console.log(this.products);
      });
    });
  }
}
