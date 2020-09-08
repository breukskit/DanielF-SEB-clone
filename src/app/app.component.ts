import { Component, OnInit } from '@angular/core';
import { ViewportService } from './services/viewport.service';
import { Store, select } from '@ngrx/store';
import { IAppState } from './models/app-state';

import { selectViewport } from './store/selectors/viewport-selectors';
import { SET_VIEWPORT } from './store/actions/viewport.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'SEB-clone';
  viewport$: Observable<string>;
  viewport;

  constructor(
    private _viewportService: ViewportService,
    private store: Store<IAppState>
  ) {
    this.viewport$ = store.pipe(select(selectViewport));
  }

  ngOnInit() {
    this.viewport$.subscribe((size) => (this.viewport = size));
    this._viewportService.getSmallViewport().subscribe(({ matches }) => {
      if (matches) {
        this.store.dispatch(SET_VIEWPORT({ size: 'small' }));
      }
    });
    this._viewportService.getMediumViewport().subscribe(({ matches }) => {
      if (matches) {
        this.store.dispatch(SET_VIEWPORT({ size: 'medium' }));
      }
    });
    this._viewportService.getLargeViewport().subscribe(({ matches }) => {
      if (matches) {
        this.store.dispatch(SET_VIEWPORT({ size: 'large' }));
      }
    });
    this._viewportService.getXLviewport().subscribe(({ matches }) => {
      if (matches) {
        this.store.dispatch(SET_VIEWPORT({ size: 'xlarge' }));
      }
    });
  }
}
