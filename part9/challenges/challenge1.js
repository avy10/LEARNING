"use strict";
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
const [gkTeam1, ...fieldPlayersTeam1] = players1;
const [gkTeam2, ...fieldPlayersTeam2] = players2;
const allPlayers = [...players1, ...players2];
//if we write const allPlayers = [...game.players] then all Players is a 2d array. check pla for confirmation
const pla = [...game.players];
console.log(pla);

const players1Final = ["Thiago", "Coutinho", "Perisic", ...fieldPlayersTeam1];

const {
  odds: { team1, x: draw, team2 },
} = game;
//or
const { team1: teamWan, x: tie, team2: teamTwo } = game.odds;
console.log(team1);
console.log(teamWan);

const printGoals = (...players) => {
  for (let i = 0; i < players.length; i++) {
    console.log(players[i]);
  }

  console.log(`${players.length} number of goals were scored`);
};

printGoals(...game.scored);

team1 > team2 && console.log("Team 2 wins");
team2 > team1 && console.log("Team 1 wins");
team1 === team2 && console.log("TIE");
