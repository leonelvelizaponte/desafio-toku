import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface Enemy {
  value: string;
  viewValue: string;
  dead: boolean;
}

@Component({
  selector: 'app-team-attack-option',
  templateUrl: './team-attack-option.component.html',
  styleUrls: ['./team-attack-option.component.css']
})
export class TeamAttackOptionComponent implements OnInit {

  @Input('player') public player! : any;
  @Input('enemy') public enemy! : any;
  @Input('ally') public ally! : any;
  @Input('chat') public chat! : any;
  //@Input('allyTeamWin') public allyTeamWin! : boolean;
  //@Input('enemyTeamWin') public enemyTeamWin! : boolean;
  @Output() alliesWin = new EventEmitter<void>();
  @Output() enemiesWin = new EventEmitter<void>();

  enemies: string[] = [];
  enemySelected: string = '';

  constructor() { }

  ngOnInit(): void {
    this.enemies = [
      this.enemy[0].name,
      this.enemy[1].name,
      this.enemy[2].name,
      this.enemy[3].name,
      this.enemy[4].name,
    ];
  }

  //TODO: Todos los ataques al ser el mismo codigo, pueden mejorarse
  //TODO: El manejo del chat puede mejorarse
  mentalAttack() {
    //this.allyTeamWin = true;
    const firstAttackRoulette = Math.floor(Math.random() * (2 - 1 + 1) + 1);
    if (firstAttackRoulette === 1) {//Our team attack first
      this.clearChat();
      // check if both are dead or alive
      if (!this.isDead(this.enemy[this.enemySelected].hp) && !this.isDead(this.player.hp)) {
        //Our team attack!
        this.chat.firstAttack = `${this.player.name} attack with mental power!`;
        this.enemy[this.enemySelected].hp -= Math.round(this.player.attack.mental);
      };
      // check if both are dead or alive
      if (!this.isDead(this.player.hp) && !this.isDead(this.enemy[this.enemySelected].hp)) {
        //Enemy team attack!
        this.chat.secondAttack = `${this.enemy[this.enemySelected].name} attack with mental power!`;
        this.player.hp -= Math.round(this.enemy[this.enemySelected].attack.mental);
      };
      // somebody die? say it in chat
      this.setDeadChat(this.player.hp,this.player.name,this.enemy[this.enemySelected].hp,this.enemy[this.enemySelected].name);
    } else {//The enemy team attack first
      this.clearChat();
      // check if both are dead or alive
      if (!this.isDead(this.player.hp) && !this.isDead(this.enemy[this.enemySelected].hp)) {
        //Enemy team attack!
        this.chat.firstAttack = `${this.enemy[this.enemySelected].name} attack with mental power!`;
        this.player.hp -= Math.round(this.enemy[this.enemySelected].attack.mental);
      };
      // check if both are dead or alive
      if (!this.isDead(this.enemy[this.enemySelected].hp) && !this.isDead(this.player.hp)) {
        //Our team attack!
        this.chat.secondAttack = `${this.player.name} attack with mental power!`;
        this.enemy[this.enemySelected].hp -= Math.round(this.player.attack.mental);
      };
      //somebody die? say it in chat
      this.setDeadChat(this.player.hp,this.player.name,this.enemy[this.enemySelected].hp,this.enemy[this.enemySelected].name);
    }
    this.checkIfSomeTeamWin();
  };//mentalAttack

  strongAttack() {
    const firstAttackRoulette = Math.floor(Math.random() * (2 - 1 + 1) + 1);
    if (firstAttackRoulette === 1) {//Our team attack first
      this.clearChat();
      // check if both are dead or alive
      if (!this.isDead(this.enemy[this.enemySelected].hp) && !this.isDead(this.player.hp)) {
        //Our team attack!
        this.chat.firstAttack = `${this.player.name} attack with strong power!`;
        this.enemy[this.enemySelected].hp -= Math.round(this.player.attack.strong);
      };
      // check if both are dead or alive
      if (!this.isDead(this.player.hp) && !this.isDead(this.enemy[this.enemySelected].hp)) {
        //Enemy team attack!
        this.chat.secondAttack = `${this.enemy[this.enemySelected].name} attack with strong power!`;
        this.player.hp -= Math.round(this.enemy[this.enemySelected].attack.strong);
      };
      // somebody die? say it in chat
      this.setDeadChat(this.player.hp,this.player.name,this.enemy[this.enemySelected].hp,this.enemy[this.enemySelected].name);
    } else {//The enemy team attack first
      this.clearChat();
      // check if both are dead or alive
      if (!this.isDead(this.player.hp) && !this.isDead(this.enemy[this.enemySelected].hp)) {
        //Enemy team attack!
        this.chat.firstAttack = `${this.enemy[this.enemySelected].name} attack with strong power!`;
        this.player.hp -= Math.round(this.enemy[this.enemySelected].attack.strong);
      };
      // check if both are dead or alive
      if (!this.isDead(this.enemy[this.enemySelected].hp) && !this.isDead(this.player.hp)) {
        //Our team attack!
        this.chat.secondAttack = `${this.player.name} attack with strong power!`;
        this.enemy[this.enemySelected].hp -= Math.round(this.player.attack.strong);
      };
      //somebody die? say it in chat
      this.setDeadChat(this.player.hp,this.player.name,this.enemy[this.enemySelected].hp,this.enemy[this.enemySelected].name);
    }
    this.checkIfSomeTeamWin();
  };//strongAttack

  fastAttack() {
    const firstAttackRoulette = Math.floor(Math.random() * (2 - 1 + 1) + 1);
    if (firstAttackRoulette === 1) {//Our team attack first
      this.clearChat();
      // check if both are dead or alive
      if (!this.isDead(this.enemy[this.enemySelected].hp) && !this.isDead(this.player.hp)) {
        //Our team attack!
        this.chat.firstAttack = `${this.player.name} attack with fast power!`;
        this.enemy[this.enemySelected].hp -= Math.round(this.player.attack.fast);
      };
      // check if both are dead or alive
      if (!this.isDead(this.player.hp) && !this.isDead(this.enemy[this.enemySelected].hp)) {
        //Enemy team attack!
        this.chat.secondAttack = `${this.enemy[this.enemySelected].name} attack with fast power!`;
        this.player.hp -= Math.round(this.enemy[this.enemySelected].attack.fast);
      };
      // somebody die? say it in chat
      this.setDeadChat(this.player.hp,this.player.name,this.enemy[this.enemySelected].hp,this.enemy[this.enemySelected].name);
    } else {//The enemy team attack first
      this.clearChat();
      // check if both are dead or alive
      if (!this.isDead(this.player.hp) && !this.isDead(this.enemy[this.enemySelected].hp)) {
        //Enemy team attack!
        this.chat.firstAttack = `${this.enemy[this.enemySelected].name} attack with fast power!`;
        this.player.hp -= Math.round(this.enemy[this.enemySelected].attack.fast);
      };
      // check if both are dead or alive
      if (!this.isDead(this.enemy[this.enemySelected].hp) && !this.isDead(this.player.hp)) {
        //Our team attack!
        this.chat.secondAttack = `${this.player.name} attack with fast power!`;
        this.enemy[this.enemySelected].hp -= Math.round(this.player.attack.fast);
      };
      //somebody die? say it in chat
      this.setDeadChat(this.player.hp,this.player.name,this.enemy[this.enemySelected].hp,this.enemy[this.enemySelected].name);
    }
    this.checkIfSomeTeamWin();
  };//fastAttack

  isDead(character: number) {
    if (character < 1) {
      return true;
    } else {
      return false;
    }
  };//isDead

  clearChat() {
    this.chat.firstAttack = '-';
    this.chat.secondAttack = '-';
    this.chat.infoAttack = '-';
  };//clarChat

  setDeadChat(allyPlayerHP : number,allyPlayerName : string, enemyPlayerHP : number, enemyPlayerName : string) {
    if (this.isDead(allyPlayerHP) || this.isDead(enemyPlayerHP)) {
      if (this.isDead(allyPlayerHP)) {
        this.chat.infoAttack = `${allyPlayerName} is DEAD!`;
      } else {
        this.chat.infoAttack = `${enemyPlayerName} is DEAD!`;
      }
    };
  }//setDeadChat

  checkIfSomeTeamWin() {
    if(
      this.isDead(this.enemy[0].hp)
      && this.isDead(this.enemy[1].hp)
      && this.isDead(this.enemy[2].hp)
      && this.isDead(this.enemy[3].hp)
      && this.isDead(this.enemy[4].hp)
    ) {
      //this.allyTeamWin = true;
      this.alliesWin.emit();
    };

    if(
      this.isDead(this.ally[0].hp)
      && this.isDead(this.ally[1].hp)
      && this.isDead(this.ally[2].hp)
      && this.isDead(this.ally[3].hp)
      && this.isDead(this.ally[4].hp)
    ) {
      //this.enemyTeamWin = true;
      this.enemiesWin.emit();
    };
  };//checkIfSomeTeamWon
  
}
