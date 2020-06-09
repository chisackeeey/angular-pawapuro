import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectTeamsComponent } from './select-teams.component';

const routes: Routes = [{ path: '', component: SelectTeamsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectTeamsRoutingModule {}
