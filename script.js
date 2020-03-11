// Mobile Menu

// OLD FUNCTION
// function myFunction() {
//   let logo = document.querySelectorAll('.team');

//   for (i = 0; i < logo.length; i++) {
//     logo[i].classList.toggle('hide-mobile');
//   }
// }

// FOR/OF function
document.getElementById('menu').addEventListener('click', myFunction);
function myFunction() {
  let logos = document.querySelectorAll('.team');

  for (const logo of logos) {
    logo.classList.toggle('hide-mobile');
  }
}

// NBA API
  // fetch("https://api-nba-v1.p.rapidapi.com/players/lastName/lillard", {
  //   "method": "GET",
  //   "headers": {
  //     "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
  //     "x-rapidapi-key": "a52fe69426msh1f35c669fc86b74p1400dajsnbf9383d6c503"
  //   }
  // })
  // .then(response => {
  //   return response.json();
  // })
  // .then((data) => {
  //   console.log(data);
  // })
  // .catch(err => {
  //   console.log(err);
  // });

// Player Data
  async function getPlayerData() {
    let playerId = Math.floor(Math.random() * 999);
    const api_url = "https://api-nba-v1.p.rapidapi.com/players/playerId/" + playerId;
    const response = await fetch(api_url, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
        "x-rapidapi-key": "a52fe69426msh1f35c669fc86b74p1400dajsnbf9383d6c503"
      }
    })

    const playerData = await response.json();
    const playerName = playerData["api"]["players"][0];
    console.log(playerData);
    document.getElementById('fullName').textContent = playerName["firstName"] + ' ' + playerName["lastName"];
    document.getElementById('team').textContent = playerName["teamId"];
  }

  getPlayerData();
  
// Live Game Data
  async function getLiveData() {
    const api_url = "https://api-nba-v1.p.rapidapi.com/games/live/";
    const response = await fetch(api_url, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
        "x-rapidapi-key": "a52fe69426msh1f35c669fc86b74p1400dajsnbf9383d6c503"
      }
    })
    .catch(err => {
      console.log(err);
    });
    const gameData = await response.json();
    const gameId = gameData["api"]["games"][0];
    const gameClock = gameData["api"]["games"][0]["clock"];
    const homeTeam = gameId["hTeam"]["fullName"];
    const visitingTeam = gameId["vTeam"]["fullName"];
    const homeScore = gameId["hTeam"]["score"]["points"];
    const visitingScore = gameId["vTeam"]["score"]["points"];
    const homeLogo = gameId["hTeam"]["logo"];
    const visitingLogo = gameId["vTeam"]["logo"];

    console.log(gameData);
    document.getElementById('homeTeam').textContent = homeTeam;
    document.getElementById('homeScore').textContent = homeScore;
    document.getElementById('visitingTeam').textContent = visitingTeam;
    document.getElementById('visitingScore').textContent = visitingScore;
    document.getElementById('clock').textContent = gameClock;
    document.getElementById('homeLogo').src = homeLogo;
    document.getElementById('visitingLogo').src = visitingLogo;
  }

  getLiveData();

// Team Data

// async function getTeamName() {
//   const api_url = "https://api-nba-v1.p.rapidapi.com/teams/teamId/1";
//     const response = await fetch(api_url, {
//       "method": "GET",
//       "headers": {
//         "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
//         "x-rapidapi-key": "a52fe69426msh1f35c669fc86b74p1400dajsnbf9383d6c503"
//       }
//     })
//     const teamData = await response.json();
//     const teamId = teamData["api"]["teams"]["teamId"];
//     const teamName = teamData["api"]["teams"]["teamName"];

//     function getName() {
//       if (teamId) {
//         return teamData["api"]["fullName"];
//       } else {
//         return teamId;
//       }
//     }
//     console.log(getName);
//     getName();
   
//     document.getElementById('teamName').textContent = teamName;
// }