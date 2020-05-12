import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LazyLoaderService } from 'src/app/LazyLoader.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  constructor(private router: Router,
              private lazyLoaderService: LazyLoaderService) { }

  ngOnInit(): void {

  }

  loadLazyModule(): void {
    this.lazyLoaderService.loadLazyModules('lazy','./lazy-non-routes/lazy-non-routes.module').subscribe(() => {
      const config = this.router.config;
      config.push({
        path: 'lazy',
        loadChildren: () => this.lazyLoaderService.getLazyModule('lazy')
      });
      this.router.resetConfig(config);
      this.router.navigate(['lazy']);
    });
  }

}
