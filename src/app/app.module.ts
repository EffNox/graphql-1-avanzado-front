import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql';
import { HttpClientModule } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CharactersComponent } from './views/pages/characters/characters.component';
import { VotesComponent } from './views/pages/votes/votes.component';
import { CardComponent } from './views/components/card/card.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { NavbarComponent } from './views/shared/navbar/navbar.component';
import { ChartComponent } from './views/components/chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    VotesComponent,
    CardComponent,
    TruncatePipe,
    NavbarComponent,
    ChartComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
