// var workoutArray = [];
// var recipeArray = [];
// var workoutKey = "Workouts";
// var recipeKey = "Recipes";
// var workoutStorageItems = getStorageItems(workoutKey);
// var recipeStorageItems = getStorageItems(recipeKey);

// for (var w = 0; w < workoutStorageItems.length; w++) {
//   workoutArray.push(workoutStorageItems[w]);
//   $("#workoutListContainer").append("<li class='workoutList'>" + workoutStorageItems[w] + "</li>");
// }

// for (var r = 0; r < recipeStorageItems.length; r++) {
//   recipeArray.push(recipeStorageItems[r]);
//   $("#recipeListContainer").append("<li class='recipeList'>" + recipeStorageItems[r] + "</li>");
// }

// $("#favoriteWorkout").click(function() {
//   var workoutName = $(".nameDisplay").text();
//   $("#workoutListContainer").append("<li class='workoutList'>" + workoutName + "</li>");
//   workoutArray.push(workoutName);
//   localStorage.setItem("Workouts", JSON.stringify(workoutArray));
// })

// function getStorageItems(type) {
//   var savedItems = JSON.parse(localStorage.getItem(type)) || [];
//   return savedItems;
// }

// $("#deleteWorkouts").click(function() {
//   localStorage.removeItem("Workouts");
//   $("#workoutListContainer").html("");
// })

// $("#deleteRecipes").click(function() {
//   localStorage.removeItem("Recipes");
//   $("#recipeListContainer").html("");
// })

// // const API_KEY = require('./api_key');

// async function displayWorkouts() {
//   fetch("https://exercisedb.p.rapidapi.com/exercises/equipment", {
//     "method": "GET",
//     "headers": {
//       "x-rapidapi-host": "exercisedb.p.rapidapi.com",
//       "x-rapidapi-key": "9ad70f7a66msh5f746fbfe9bbaaap1330c1jsn283357ca9687"
//     }
//   })
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     console.log(data)
//   })
//   .catch(err => {
//     console.error(err);
//   });
// }

// document.querySelector("#workoutResult").addEventListener('click', displayWorkouts())