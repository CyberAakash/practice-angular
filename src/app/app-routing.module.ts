import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { HomeComponent } from './home/home.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '1', component: StringInterpolationComponent },
  { path: '2', component: EventBindingComponent },
  { path: '3', component: TwoWayBindingComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
