import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {
  isMobile$: Observable<boolean>;
  isTablet$: Observable<boolean>;
  isDesktop$: Observable<boolean>;

  constructor(private responsive: BreakpointObserver) {
    this.isMobile$ = this.responsive
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .pipe(map((result) => result.matches));

    this.isTablet$ = this.responsive
      .observe(Breakpoints.Medium)
      .pipe(map((result) => result.matches));

    this.isDesktop$ = this.responsive
      .observe([Breakpoints.Large, Breakpoints.XLarge])
      .pipe(map((result) => result.matches));
  }
}
