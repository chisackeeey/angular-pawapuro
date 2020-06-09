import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectPitcherRoutingModule } from './select-pitcher-routing.module';
import { SelectPitcherComponent } from './select-pitcher.component';

@NgModule({
  declarations: [SelectPitcherComponent],
  imports: [CommonModule, SelectPitcherRoutingModule],
})
export class SelectPitcherModule {}
