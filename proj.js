let homeScore = 0;
let guestScore = 0;

let homeCount = document.querySelector(".home-box")
let guestCount = document.querySelector(".guest-box")

function plusOne() {
  homeScore += 1;
  homeCount.textContent = homeScore;
}

function plusTwo() {
  homeScore += 2;
  homeCount.textContent = homeScore;
}

function plusThree() {
  homeScore += 3;
  homeCount.textContent = homeScore;
}




function plusOne() {
  guestScore += 1;
  guestCount.textContent = guestScore;
}

function plusTwo() {
  guestScore += 2;
  guestCount.textContent = guestScore;
}

function plusThree() {
  guestScore += 3;
  guestCount.textContent = guestScore;
}