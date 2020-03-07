document.getElementById('menu').addEventListener('click', myFunction);

function myFunction() {
  let logo = document.getElementsByClassName("team");
  let i;

  for (i = 0; i < logo.length; i++) {
    if (logo[i].style.display === 'inline') {
      logo[i].style.display = 'none';
    } else {
      logo[i].style.display = 'inline';
    }
  }
}

// function myFunction() {
//     let logos = document.getElementById('team');
//     let displaySetting = logos.style.display;
//     if (displaySetting === "inline") {
//       displaySetting = "none";
//     } else {
//       displaySetting = "inline";
//     }
// }

// if (displaySetting === "inline") {
//     displaySetting = "none";
//   } else {
//     displaySetting = "inline";
//   }