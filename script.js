// Mobile Menu
document.getElementById('menu').addEventListener('click', myFunction);

function myFunction() {
  let logo = document.querySelectorAll('.team');

  for (i = 0; i < logo.length; i++) {
    logo[i].classList.toggle('hide-mobile');
  }
}

// NBA API
  fetch("https://api-nba-v1.p.rapidapi.com/players/lastName/lillard", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
      "x-rapidapi-key": "a52fe69426msh1f35c669fc86b74p1400dajsnbf9383d6c503"
    }
  })
  .then(response => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });


let lastName = document.querySelectorAll('lastName');