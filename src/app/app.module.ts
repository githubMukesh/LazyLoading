import { LoadModuleDirective } from './lazyModule.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { FaqModule } from './faq/faq.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    LoadModuleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // HomeModule,
    // FaqModule,
    // AuthModule
  ],
  providers: [ { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader }],
  bootstrap: [AppComponent],
  exports: [ LoadModuleDirective]
})
export class AppModule { }
