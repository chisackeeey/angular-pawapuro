import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectPitcherComponent } from './select-pitcher.component';

const routes: Routes = [{ path: '', component: SelectPitcherComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectPitcherRoutingModule {}
