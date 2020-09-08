import { Injectable } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root',
})
export class ViewportService {
  constructor(public _breakpointObserver: BreakpointObserver) {}

  getSmallViewport() {
    return this._breakpointObserver.observe(
      '(min-width: 1px) and (max-width: 766px)'
    );
  }
  getMediumViewport() {
    return this._breakpointObserver.observe(
      '(min-width: 767px) and (max-width: 1024px)'
    );
  }
  getLargeViewport() {
    return this._breakpointObserver.observe(
      '(min-width: 1025px) and (max-width: 1299px)'
    );
  }
  getXLviewport() {
    return this._breakpointObserver.observe('(min-width: 1300px)');
  }
}
