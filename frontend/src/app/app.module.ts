import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeamACardComponent } from './team-a-card/team-a-card.component';
import { TeamBCardComponent } from './team-b-card/team-b-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from "@angular/material/button";
import { TeamAttackOptionComponent } from './team-attack-option/team-attack-option.component';
import { MatSelectModule } from '@angular/material/select'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ApiService } from './shared/api.service';
import { HttpClientModule } from "@angular/common/http";
import { LoadingTeamsComponent } from './loading-teams/loading-teams.component';
import { ProcessingBattleComponent } from './processing-battle/processing-battle.component';


@NgModule({
  declarations: [
    AppComponent,
    TeamACardComponent,
    TeamBCardComponent,
    TeamAttackOptionComponent,
    LoadingTeamsComponent,
    ProcessingBattleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
