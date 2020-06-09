import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectBatterComponent } from './select-batter.component';

const routes: Routes = [{ path: '', component: SelectBatterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectBatterRoutingModule {}
