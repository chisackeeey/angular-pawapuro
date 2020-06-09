import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectTeamsComponent } from './select-teams/select-teams.component';
import { SelectPitcherComponent } from './select-pitcher/select-pitcher.component';
import { SelectBatterComponent } from './select-batter/select-batter.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectTeamsComponent,
    SelectPitcherComponent,
    SelectBatterComponent,
    ConfirmationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
