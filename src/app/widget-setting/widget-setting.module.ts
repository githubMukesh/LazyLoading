import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetComponent } from './widget/widget.component';



@NgModule({
  declarations: [WidgetSettingModule.rootComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '' , component: WidgetComponent}])
  ],
  bootstrap: [WidgetSettingModule.rootComponent]
})
export default class WidgetSettingModule {
  static rootComponent = WidgetComponent;
 }
