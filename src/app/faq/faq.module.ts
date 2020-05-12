import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './component/faq.component';
import { LoadModuleDirective } from '../lazyModule.directive';



@NgModule({
  declarations: [FaqComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: FaqComponent}])
  ],
  exports: [FaqComponent]
})
export class FaqModule { }
