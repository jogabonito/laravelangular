import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuotesComponent } from './quotes/quotes.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';
import { routing } from './app.routing';
import { QuoteService } from './quote.service';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuotesComponent,
    NewQuoteComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    FormsModule,
  ],
  providers: [QuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
