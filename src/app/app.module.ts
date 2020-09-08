import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { StoreModule } from '@ngrx/store';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';

import { viewportReducer } from './store/reducers/viewport.reducer';
import { HeaderComponent } from './components/header/header.component';
import { HamburgerDropdownComponent } from './components/header/hamburger-dropdown/hamburger-dropdown.component';

@NgModule({
  declarations: [AppComponent, NavComponent, HeaderComponent, HamburgerDropdownComponent],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    LayoutModule,
    StoreModule.forRoot({ viewport: viewportReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
