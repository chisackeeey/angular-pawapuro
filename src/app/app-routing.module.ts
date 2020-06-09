import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'select-teams', pathMatch: 'full' },
  {
    path: 'select-teams',
    loadChildren: () =>
      import('./select-teams/select-teams.module').then(
        (m) => m.SelectTeamsModule
      ),
  },
  {
    path: 'select-pitcher',
    loadChildren: () =>
      import('./select-pitcher/select-pitcher.module').then(
        (m) => m.SelectPitcherModule
      ),
  },
  {
    path: 'select-batter',
    loadChildren: () =>
      import('./select-batter/select-batter.module').then(
        (m) => m.SelectBatterModule
      ),
  },
  {
    path: 'confirmation',
    loadChildren: () =>
      import('./confirmation/confirmation.module').then(
        (m) => m.ConfirmationModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
