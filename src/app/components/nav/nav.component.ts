import { Component, OnInit } from '@angular/core';
import {
  faSearch,
  faArrowRight,
  faUser,
  faLock,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import { Store, select } from '@ngrx/store';
import { selectViewport } from '../../store/selectors/viewport-selectors';
import { IAppState } from 'src/app/models/app-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  faSearch = faSearch;
  faArrowRight = faArrowRight;
  faUser = faUser;
  faLock = faLock;
  faBars = faBars;

  viewport$: Observable<string>;

  viewport;

  constructor(private store: Store<IAppState>) {
    this.viewport$ = this.store.pipe(select(selectViewport));
  }

  ngOnInit(): void {
    this.viewport$.subscribe((size) => (this.viewport = size));
  }
}
