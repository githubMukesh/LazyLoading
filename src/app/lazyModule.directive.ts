import { LAZY_MODULES_MAP, LAZY_MODULES } from './lazy.provider';
import {Directive,Input, Inject, NgModuleFactory,
   NgModuleFactoryLoader, Injector,
   ViewContainerRef, NgModuleRef, OnInit, OnDestroy, Type} from '@angular/core';

type ModuleWithRoot = Type<any> & { rootComponent: Type<any> };
@Directive({
  selector: '[loadModule]'
})
export class LoadModuleDirective implements OnInit, OnDestroy {
  @Input('loadModule') moduleName: keyof LAZY_MODULES;
  private moduleRef: NgModuleRef<any>;

  constructor(
    private vcr: ViewContainerRef,
    private injector: Injector,
    private loader: NgModuleFactoryLoader,
    @Inject(LAZY_MODULES_MAP) private modulesMap
  ) {}

  ngOnInit() {
    this.loader
    .load(this.modulesMap[this.moduleName])
    .then((moduleFactory: NgModuleFactory<any>) => {
      this.moduleRef = moduleFactory.create(this.injector);
      const rootComponent = (moduleFactory.moduleType as ModuleWithRoot)
        .rootComponent;

      const factory = this.moduleRef.componentFactoryResolver.resolveComponentFactory(
        rootComponent
      );

      this.vcr.createComponent(factory);
    });

  }
  ngOnDestroy() {
    this.moduleRef && this.moduleRef.destroy();
  }
}
