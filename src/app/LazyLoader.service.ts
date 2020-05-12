import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class LazyLoaderService {
  private lazyMap: Map<string, Promise<unknown>> = new Map();

  constructor() {}

  getLazyModule(key: string): Promise<unknown> {
    return this.lazyMap.get(key);
  }

  loadLazyModules(key: string, path: string): Observable<number | void> {
    return of(1).pipe(
      tap(() => {
        this.lazyMap.set(
          key,
          import('./lazy-non-routes/lazy-non-routes.module').then(m => m.LazyNonRoutesModule).catch((err)=>{console.log(err)})
        );
      })
    );
  }
}
