import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectBatterRoutingModule } from './select-batter-routing.module';
import { SelectBatterComponent } from './select-batter.component';

@NgModule({
  declarations: [SelectBatterComponent],
  imports: [CommonModule, SelectBatterRoutingModule],
})
export class SelectBatterModule {}
