import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Modulos */
import { PagesModule } from './pages/pages.module';
import { SettingsService } from './services/settings.service';

/* Servicios */




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PagesModule,
    AppRoutingModule
  ],
  providers: [
    SettingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
