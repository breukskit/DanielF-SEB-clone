import { Component, OnInit } from '@angular/core';
import {
  faArrowRight,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/models/app-state';

import { selectViewport } from '../../../store/selectors/viewport-selectors';

@Component({
  selector: 'app-mega-menu',
  templateUrl: './mega-menu.component.html',
  styleUrls: ['./mega-menu.component.scss'],
})
export class MegaMenuComponent implements OnInit {
  faArrowRight = faArrowRight;
  faChevronRight = faChevronRight;

  viewport;

  constructor(private store: Store<IAppState>) {
    this.store
      .pipe(select(selectViewport))
      .subscribe((size) => (this.viewport = size));
  }

  ngOnInit(): void {}
}
