import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { PipesComponent } from './components/pipes/pipes.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpComponent } from './components/http/http.component';

@NgModule({
  declarations: [AppComponent, ShortenPipe, FilterPipe, PipesComponent, HeaderComponent, HttpComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
