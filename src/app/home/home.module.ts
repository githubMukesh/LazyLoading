import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './component/home.component';
import { RouterModule } from '@angular/router';
import { Lazy1Component } from './component/lazy1/lazy1.component';
import { Lazy2Component } from './component/lazy2/lazy2.component';



@NgModule({
  declarations: [HomeComponent,
    //Lazy1Component, Lazy2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: HomeComponent}])
  ]
})
export class HomeModule { }
