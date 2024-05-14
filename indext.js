
function getPlayerChoice () {
  var randomPic = Math.floor(Math.random() * 3 ) + 1;
  var randomPicImage = "Img" + randomPic + ".png";
  var randomImageSource = "images/" + randomPicImage;
  document.querySelector(".playerImage").setAttribute("src", randomImageSource);
  return randomPicImage;  // Return the file name
  };


function getComputerChoice () {
var randomPic = Math.floor(Math.random() * 3 ) + 1;
var randomPicImage = "Img" + randomPic + ".png";
var randomImageSource = "images/" + randomPicImage;
document.querySelector(".comImage").setAttribute("src", randomImageSource);
return randomPicImage;  // Return the file name
};



function getWinner (playerChoice, ComputerChoice) {
  if (playerChoice === ComputerChoice) {
     return"It's a tie";
  } else if (
    (playerChoice === 'Img1.png' && ComputerChoice === 'Img3.png')||
     (playerChoice === 'Img2.png' && ComputerChoice === 'Img1.png')||
     (playerChoice === 'Img3.png' && ComputerChoice === 'Img2.png')
     ) {
      return"You win!";
     } else {
      return"You Lose Fool!!";
     }
}





function game () {
  const ComputerChoice = getComputerChoice();
  const playerChoice = getPlayerChoice();
  const result = getWinner (playerChoice, ComputerChoice);
  document.querySelector('h1').innerHTML = result;
};

game();

