import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { selectViewport } from '../../store/selectors/viewport-selectors';
import { IAppState } from 'src/app/models/app-state';
import { Observable } from 'rxjs';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faArrowRight = faArrowRight;

  viewport$: Observable<string>;

  viewport;

  constructor(private store: Store<IAppState>) {
    this.viewport$ = this.store.pipe(select(selectViewport));
  }

  ngOnInit(): void {
    this.viewport$.subscribe((size) => (this.viewport = size));
  }
}
