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
const ratingElements = document.querySelectorAll(`.rating`);

const submitRate = document.querySelector(`.btn`);

const ratingCard = document.querySelector(`
.ratingCard`);

const thankYouScreen = document.querySelector(`.thankYouScreen`);
const paragraphText = document.querySelector(`.printed-rating`);

const form = document.querySelector(`form`);

let rating;

// 2) rating function
for (const ratingElement of ratingElements) {
  ratingElement.addEventListener(`click`, function () {
    const activeRating = document.querySelector(`.rating-active`);
    if (ratingElement === activeRating) {
      ratingElement.classList.remove(`rating-active`);
    } else {
      ratingElement.classList.add(`rating-active`);
      if (activeRating) {
        activeRating.classList.remove(`rating-active`);
      }
      rating = ratingElement.textContent;
      console.log(rating);
    }
  });
}

// 2) with Foreach
// ratingElements.forEach(function (rate) {
//   rate.addEventListener(`click`, function () {
//     ratingElements.forEach(function (ratingElements) {
//       if (rate === ratingElements) {
//         ratingElements.classList.add(`rating-active`);
//       } else {
//         ratingElements.classList.remove(`rating-active`);
//       }
//     });
//     rating = Number(rate.textContent);
//   });
// });

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

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
// });
