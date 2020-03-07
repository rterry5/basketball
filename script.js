document.getElementById('menu').addEventListener('click', myFunction);

function myFunction() {
    let logos = document.getElementsByClassName('team');

  for (var i = 0; i < logos.length; i++) {
    logos[i].getElementsByClassName.display = "none";
    }
}

// if (displaySetting === "inline") {
//     displaySetting = "none";
//   } else {
//     displaySetting = "inline";
//   }