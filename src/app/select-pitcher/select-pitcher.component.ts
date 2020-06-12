import { Component, OnInit } from '@angular/core';

import { pitcherList } from './constants/pitcher-list';

@Component({
  selector: 'app-select-pitcher',
  templateUrl: './select-pitcher.component.html',
  styleUrls: ['./select-pitcher.component.scss'],
})
export class SelectPitcherComponent implements OnInit {
  starter = pitcherList.starter;
  reserverList = pitcherList.reserver;
  offList = pitcherList.off;

  constructor() {}

  ngOnInit(): void {}
}
