import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectTeamsRoutingModule } from './select-teams-routing.module';
import { SelectTeamsComponent } from './select-teams.component';
import { TeamLogoComponent } from '../shared/view/team-logo/team-logo.component';

@NgModule({
  declarations: [SelectTeamsComponent, TeamLogoComponent],
  imports: [CommonModule, SelectTeamsRoutingModule],
})
export class SelectTeamsModule {}
