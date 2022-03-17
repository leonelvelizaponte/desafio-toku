import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team-a-card',
  templateUrl: './team-a-card.component.html',
  styleUrls: ['./team-a-card.component.css']
})
export class TeamACardComponent implements OnInit {

  @Input('player') public player! : any;

  constructor() { }

  ngOnInit(): void {
  }

}
