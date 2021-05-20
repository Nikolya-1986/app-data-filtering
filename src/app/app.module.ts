import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { DataServerComponent } from './components/data-server/data-server.component';
import { DataFilterComponent } from './components/data-filter/data-filter.component';
import { DataResultsComponent } from './components/data-results/data-results.component';

@NgModule({
  declarations: [
    AppComponent,
    DataServerComponent,
    DataFilterComponent,
    DataResultsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
