// Define the game object
function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismack Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 22,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}

// Helper functions
function allPlayers() {
  const game = gameObject();
  return { ...game.home.players, ...game.away.players };
}

function findPlayer(name) {
  return allPlayers()[name];
}

function findTeam(teamName) {
  const game = gameObject();
  return game.home.teamName === teamName ? game.home : game.away;
}

// Required functions
function numPointsScored(playerName) {
  return findPlayer(playerName).points;
}

function shoeSize(playerName) {
  return findPlayer(playerName).shoe;
}

function teamColors(teamName) {
  return findTeam(teamName).colors;
}

function teamNames() {
  const game = gameObject();
  return [game.home.teamName, game.away.teamName];
}

function playerNumbers(teamName) {
  const team = findTeam(teamName);
  return Object.values(team.players).map(player => player.number);
}

function playerStats(playerName) {
  return findPlayer(playerName);
}

function bigShoeRebounds() {
  const players = allPlayers();
  let biggestShoe = 0;
  let rebounds = 0;
  for (const player of Object.values(players)) {
    if (player.shoe > biggestShoe) {
      biggestShoe = player.shoe;
      rebounds = player.rebounds;
    }
  }
  return rebounds;
}

function mostPointsScored() {
  const players = allPlayers();
  let topPlayer = '';
  let maxPoints = 0;
  for (const [name, stats] of Object.entries(players)) {
    if (stats.points > maxPoints) {
      maxPoints = stats.points;
      topPlayer = name;
    }
  }
  return topPlayer;
}

function winningTeam() {
  const game = gameObject();

  const homePoints = Object.values(game.home.players).reduce((acc, p) => acc + p.points, 0);
  const awayPoints = Object.values(game.away.players).reduce((acc, p) => acc + p.points, 0);

  return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
}

function playerWithLongestName() {
  const players = Object.keys(allPlayers());
  return players.reduce((longest, current) => current.length > longest.length ? current : longest, "");
}

function doesLongNameStealATon() {
  const longestName = playerWithLongestName();
  const players = allPlayers();
  const mostSteals = Math.max(...Object.values(players).map(p => p.steals));
  return players[longestName].steals === mostSteals;
}
