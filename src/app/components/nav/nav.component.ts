import { Component, OnInit } from '@angular/core';
import {
  faSearch,
  faArrowRight,
  faUser,
  faLock,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { Store, select } from '@ngrx/store';
import { selectViewport } from '../../store/selectors/viewport-selectors';
import { IAppState } from 'src/app/models/app-state';
import { Observable } from 'rxjs';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        animate(
          '200ms ease-in-out',
          keyframes([
            style({ opacity: 0, transform: 'translateY(50px)', offset: 0 }),
            style({
              opacity: 0.5,
              transform: 'translateY(25px)',
              offset: 0.5,
            }),
            style({ opacity: 1, transform: 'translateY(0px)', offset: 1.0 }),
          ])
        ),
      ]),
      transition(':leave', [
        animate(
          '200ms ease-out',
          keyframes([
            style({ opacity: 1, transform: 'translateY(0px)', offset: 0 }),
            style({
              opacity: 0.5,
              transform: 'translateY(50px)',
              offset: 0.5,
            }),
            style({ opacity: 0, transform: 'translateY(100px)', offset: 1.0 }),
          ])
        ),
      ]),
    ]),
    trigger('enterLeave', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('100ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class NavComponent implements OnInit {
  faSearch = faSearch;
  faArrowRight = faArrowRight;
  faUser = faUser;
  faLock = faLock;
  faBars = faBars;
  faTimes = faTimes;

  viewport$: Observable<string>;

  viewport;

  megaMenu = false;
  loginMenu = false;

  toggleMegaMenu() {
    this.megaMenu = !this.megaMenu;
    this.loginMenu = false;
  }

  toggleLoginMenu() {
    this.loginMenu = !this.loginMenu;
    this.megaMenu = false;
  }

  constructor(private store: Store<IAppState>) {
    this.viewport$ = this.store.pipe(select(selectViewport));
  }

  ngOnInit(): void {
    this.viewport$.subscribe((size) => (this.viewport = size));
  }
}
