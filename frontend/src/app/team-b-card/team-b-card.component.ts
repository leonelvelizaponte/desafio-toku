import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team-b-card',
  templateUrl: './team-b-card.component.html',
  styleUrls: ['./team-b-card.component.css']
})
export class TeamBCardComponent implements OnInit {

  @Input('player') public player! : any;

  constructor() { }

  ngOnInit(): void {
  }

}
