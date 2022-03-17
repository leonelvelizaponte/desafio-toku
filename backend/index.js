const express = require("express");
var cors = require('cors');
var request = require('request');
const axios = require('axios');
const app = express();

//TODO: quizas 
const url = 'https://superheroapi.com/api/2183127771827858/';
let teamA = { 'members' : [], 'teamAlignment' : '' };
let teamB = { 'members' : [], 'teamAlignment' : '' };

app.use(cors());


app.use(function (err, req, res, next) {
  console.log(err);
  res.status(err.status || 500).json({status: err.status, message: err.message})
});


app.get('/characters/:player1/:player2/:player3/:player4/:player5/:player6/:player7/:player8/:player9/:player10', async function (req, res) {
  //TODO: ver opciones para manejar los 10 ids que llegan desde el cliente
  let charactersIds = [
    req.params.player1,
    req.params.player2,
    req.params.player3,
    req.params.player4,
    req.params.player5,
    req.params.player6,
    req.params.player7,
    req.params.player8,
    req.params.player9,
    req.params.player10,
  ];
  console.log('IDS: ', charactersIds );
  //let processedCharacter = [null, null, null, null, null, null, null, null, null, null];

  if (hasDuplicates(charactersIds)) {
    console.log('Duplicates IDs - News IDS:');
    // TODO: Revisar porque no tengo el mensaje de error en la respuesta de la API
    //res.status(400).send('Duplicate ids, please submit non duplicate ids');
    //throw {status: 400, message: 'Duplicate ids'};
    charactersIds = [
      randomId(),
      randomId(),
      randomId(),
      randomId(),
      randomId(),
      randomId(),
      randomId(),
      randomId(),
      randomId(),
      randomId(),
    ];
    console.log('IDS: ', charactersIds );
  }

  callProcessHeroAPI(charactersIds).then((characters) => {
    //TODO: quizas estaria mas interesante hacer algun tipo de random para team mach
    characters.map((character,index) => {
      if (index < 5) {
        teamA.members.push(character);
      } else {
        teamB.members.push(character);
      }
    });

    //Set team alignment (good vs baddass)
    teamA.teamAlignment = setTeamAlignment(teamA.members);
    teamB.teamAlignment = setTeamAlignment(teamB.members);

    //Set Filiation Coefficient 
    setFiliationCoefficient(teamA.members, teamA.teamAlignment).then((teamWithFB) => {});
    setFiliationCoefficient(teamB.members, teamB.teamAlignment).then((teamWithFB) => {});

    //Set attack stats
    setAttack(teamA.members).then((teamWithAttacks) => {});
    setAttack(teamB.members).then((teamWithAttacks) => {});

    //Set HP
    setHp(teamA.members).then((teamWithHP) => {});
    setHp(teamB.members).then((teamWithHP) => {});

    //Set Stats
    setStats(teamA.members).then((teamWithStats) => {});
    setStats(teamB.members).then((teamWithStats) => {});

    res.send({teamA,teamB});
  });//callProcessHeroAPI
});

// Compare if some element is duplicate
function hasDuplicates(array) {
  return (new Set(array)).size !== array.length;
} //hasDuplicates

function randomId(){
  return Math.floor(Math.random() * (731 - 1 + 1) + 1)
}//randomId

// setting up and filter data from api call
function filterCharacterInfo(charInformation) {
  let filteredInfo = {
    name: '',
    id: '',
    alignment: '',
    powerstats: {
      intelligence: '',
      strength: '',
      speed: '',
      durability: '',
      power: '',
      combat: ''
    },
    image: '',
    fb: '',
    attack: {
      mental: '',
      strong: '',
      fast: '',
    },
    hp: 0,
    stats: '',
    base: '',
  };

  filteredInfo.name = charInformation.name;
  filteredInfo.id = charInformation.id;
  filteredInfo.alignment = charInformation.biography.alignment;
  // with null validation
  filteredInfo.powerstats.intelligence = charInformation.powerstats.intelligence !== 'null'? +charInformation.powerstats.intelligence : 1;
  filteredInfo.powerstats.strength = charInformation.powerstats.strength !== 'null'? +charInformation.powerstats.strength : 1;
  filteredInfo.powerstats.speed = charInformation.powerstats.speed !== 'null'? +charInformation.powerstats.speed : 1;
  filteredInfo.powerstats.durability = charInformation.powerstats.durability !== 'null'? +charInformation.powerstats.durability : 1;
  filteredInfo.powerstats.power = charInformation.powerstats.power !== 'null'? +charInformation.powerstats.power : 1;
  filteredInfo.powerstats.combat = charInformation.powerstats.combat !== 'null'? +charInformation.powerstats.combat : 1;

  filteredInfo.image = charInformation.image;
  filteredInfo.powerstats.stamina = Math.floor(Math.random() * (10 - 0 + 1) + 0);
  //TODO: revisar si base es este dato o que
  filteredInfo.base = charInformation.work.base.length;
  Number(filteredInfo.powerstats.intelligence);

  return filteredInfo;
} //filterCharacterInfo

function callProcessHeroAPI(charactersID) {
  let processedCharacter = [null, null, null, null, null, null, null, null, null, null];
  teamA = { 'members' : [], 'teamAlignment' : '' };
  teamB = { 'members' : [], 'teamAlignment' : '' };
  const requests = charactersID.map((characterId, index) => {
    return axios.get(`${url}${characterId}`).then(res => {
      processedCharacter[index] = filterCharacterInfo(res.data);
    });
  });

  return Promise.all(requests).then(() => {
    return processedCharacter;
  });
};//callProcessHeroAPI

function setTeamAlignment(team) {
  let teamAlignment;
  let goodOnes = 0;
  let badOnes = 0;

  team.map((player) => {
    if (player.alignment === 'good') {
      goodOnes += 1;
    } else if(player.alignment === 'bad') {
      badOnes += 1;
    } else {
      //We need a team alignment, so, we push the neutral to get a party with random
      const roulette = Math.floor(Math.random() * (2 - 1 + 1) + 1)
      roulette === 1 ? goodOnes += 1 : badOnes += 1;
    }
  });

  if (goodOnes < badOnes) {
    teamAlignment = 'bad';
  } else {
    teamAlignment = 'good';
  }

  return teamAlignment;
} //setTeamAlignment

//This is a bonus or penalty for player by team alignment
function setFiliationCoefficient(team, alignment) {
  const FBs = team.map((teamMember, index) => {
    if (teamMember.alignment === alignment) {
      return teamMember.fb = Math.floor(Math.random() * (9 - 0 + 1) + 0);
    } else {
      return teamMember.fb = Math.floor(Math.random() * (9 - 0 + 1) + 0) ** -1;
    };
  });

  return Promise.all(FBs).then(() => {
    return team;
  });
};//setFiliationCoefficient

function setAttack(team) {
  const attack = team.map((teamMember) => {
    //mental attack
    teamMember.attack.mental = ((teamMember.powerstats.intelligence * 0.7) + (teamMember.powerstats.speed * 0.2) + (teamMember.powerstats.combat * 0.1)) * teamMember.fb;
    //strong attack
    teamMember.attack.strong = ((teamMember.powerstats.strength * 0.6) + (teamMember.powerstats.power * 0.2) + (teamMember.powerstats.combat * 0.2)) * teamMember.fb;
    //fast attack
    teamMember.attack.fast = ((teamMember.powerstats.speed * 0.55) + (teamMember.powerstats.durability * 0.25) + (teamMember.powerstats.combat * 0.2)) * teamMember.fb;
  
    return teamMember;
  });

  return Promise.all(attack).then(() => {
    return team;
  });
};//setAttack

function setHp(team) {
  const healthPoints = team.map((teamMember) => {
  
    const HP = ((((teamMember.powerstats.strength * 0.8) + (teamMember.powerstats.durability * 0.7) + teamMember.powerstats.power) / 2) * (1 + (teamMember.powerstats.stamina / 10))) + 100;
    
    teamMember.hp = Math.round(HP);

    return teamMember;
  });

  return Promise.all(healthPoints).then(() => {
    return team;
  });
};//setHp

function setStats(team) {
  const statsData = team.map((teamMember) => {
  
    const processedStats = (((2 * teamMember.base) + teamMember.powerstats.stamina) / 1.1) * teamMember.fb;

    teamMember.stats = Math.round(processedStats);

    return teamMember;
  });

  return Promise.all(statsData).then(() => {
    return team;
  });
};//setStats

app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});