import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { StoreModule } from '@ngrx/store';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';

import { viewportReducer } from './store/reducers/viewport.reducer';
import { HeaderComponent } from './components/header/header.component';
import { MegaMenuComponent } from './components/nav/mega-menu/mega-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    MegaMenuComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    LayoutModule,
    StoreModule.forRoot({ viewport: viewportReducer }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
