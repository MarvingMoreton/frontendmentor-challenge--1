"use strict";
/*
Dissectation:


1) DOM: attached to a const each class that need to be called:
- Individual rating
- Submit button
- Dynamic text displayed on screen 2


2) Rating select & unselect management
A) Grey when a rate is selected
B) Only one rate can be selected at a time

3) Submit effects
A) Cannot proceed if a rate is not selected
B) When submit and rate selected go to screen 2

*/

// 1) DOM selection
const currentRating = document.querySelectorAll(`.rating`);

const submitRate = document.querySelector(`.btn`);

const ratingCard = document.querySelector(`
.ratingCard`);

const thankYouScreen = document.querySelector(`.thankYouScreen`);
const paragraphText = document.querySelector(`.printed-rating`);

let rating;

// 2) rating function

currentRating.forEach(function (rate) {
  rate.addEventListener(`click`, function () {
    currentRating.forEach(function (currentRating) {
      if (rate === currentRating) {
        currentRating.classList.add(`rating-active`);
      } else {
        currentRating.classList.remove(`rating-active`);
      }
    });
    rating = Number(rate.textContent);
  });
});

// 3) Submit effects

submitRate.addEventListener("click", function () {
  if (!rating) {
    alert("Be kind as selecting a rating before submitting");
  } else {
    ratingCard.classList.add("inactive");
    thankYouScreen.classList.remove("inactive");
    paragraphText.textContent = `You have selected ${rating} out of 5`;
  }
});
