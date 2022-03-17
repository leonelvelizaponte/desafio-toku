import { Component } from '@angular/core';
import { ApiService } from './shared/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor (public apiService: ApiService) { }
  title = 'hero-front';
  //teams: any;
  teamA: any;
  teamB: any;
  chat = {
    firstAttack: '-',
    secondAttack: '-',
    infoAttack: '-',
  };
  allyTeamWin : boolean = false;
  enemyTeamWin : boolean = false;
  onBoardingFlag = true;
  creatingFlag = false;
  initTeamFlag = false;
  battleLoadingFlag = false;
  battleFlag = false;

  ngOnInit() {
  }

  createTeam() {
    this.togglecreatingFlag();
    this.onBoardingFlag = false;
    this.initTeamFlag = false;
    this.apiService.getTeams().subscribe(data => {
      this.teamA = data.teamA.members;
      this.teamB = data.teamB.members;
      setTimeout(()=>{
        this.togglecreatingFlag();
        this.toggleInitialTeamFlag();
      }, 2000);//setTimeout
      
    });;
  };//createTeam

  playAgain() {
    this.chat = {
      firstAttack: '-',
      secondAttack: '-',
      infoAttack: '-',
    };
    this.allyTeamWin = false;
    this.enemyTeamWin = false;
    this.onBoardingFlag = true;
    this.creatingFlag = false;
    this.initTeamFlag = false;
    this.battleLoadingFlag = false;
    this.battleFlag = false;
  }//playAgain

  letsBattle() {
    this.toggleInitialTeamFlag();
    this.toggleBattleLoadingFlag();
    setTimeout(()=>{
      this.toggleBattleFlag();
      this.toggleBattleLoadingFlag();
    }, 2500);//setTimeout
  }//letsBattle

  toggleAlliesWin() {
    setTimeout(()=>{
      this.battleFlag = !this.battleFlag;
      this.allyTeamWin = !this.allyTeamWin;
    }, 1000);//setTimeout
  };//toggleAlliesWin

  toggleEnemiesWin() {
    setTimeout(()=>{
      this.battleFlag = !this.battleFlag;
      this.enemyTeamWin = !this.enemyTeamWin;
    }, 1000);//setTimeout
  };//toggleEnemiesWin

  toggleBattleFlag() {
    this.battleFlag = !this.battleFlag;
  };//toggleBattleLoadingFlag

  toggleBattleLoadingFlag() {
    this.battleLoadingFlag = !this.battleLoadingFlag;
  };//toggleBattleLoadingFlag

  togglecreatingFlag() {
    this.creatingFlag = !this.creatingFlag;
  };//togglecreatingFlag

  toggleInitialTeamFlag() {
    this.initTeamFlag = !this.initTeamFlag;
  };//toggleInitialTeamFlag
}
