import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectTeamsRoutingModule } from './select-teams-routing.module';
import { SelectTeamsComponent } from './select-teams.component';

@NgModule({
  declarations: [SelectTeamsComponent],
  imports: [CommonModule, SelectTeamsRoutingModule],
})
export class SelectTeamsModule {}
