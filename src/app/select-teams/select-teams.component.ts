import { Component, OnInit } from '@angular/core';
import { logoList } from './constants/logo-list';

@Component({
  selector: 'app-select-teams',
  templateUrl: './select-teams.component.html',
  styleUrls: ['./select-teams.component.css'],
})
export class SelectTeamsComponent implements OnInit {
  myTeam = '/assets/images/logo/lions.jpg';
  otherTeam = '/assets/images/logo/fighters.jpg';

  centralList = logoList.central.map((logo) => logo.path);
  pacificList = logoList.pacfic.map((logo) => logo.path);

  constructor() {}

  ngOnInit(): void {}
}
