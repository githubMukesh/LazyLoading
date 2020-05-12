import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private viewContainerRef: ViewContainerRef,
              private compFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  async getLazy1() {
    this.viewContainerRef.clear();
    const { Lazy1Component } = await import('./lazy1/lazy1.component');
    this.viewContainerRef.createComponent(
      this.compFactoryResolver.resolveComponentFactory(Lazy1Component)
    );
  }

  async getLazy2() {
    this.viewContainerRef.clear();
    const { Lazy2Component } = await import('./lazy2/lazy2.component');
    this.viewContainerRef.createComponent(
      this.compFactoryResolver.resolveComponentFactory(Lazy2Component)
    );
  }


}
