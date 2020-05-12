import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompComponent } from './comp/comp.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CompComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '',component: CompComponent}])
  ]
})
export class LazyNonRoutesModule { }
