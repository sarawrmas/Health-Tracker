const searchForm = document.querySelector("form");
const searchResultDiv = document.querySelector(".search-result");
const container = document.querySelector(".container");
let searchQuery = "";
const APP_ID = "4880b60b";
const APP_key = "666fc7aae49b7d09c73d7b188e13f80b";

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchQuery = e.target.querySelector("input").value;
  fetchAPI();
});

async function fetchAPI() {
  const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&from=0&to=20`;
  const response = await fetch(baseURL);
  const data = await response.json();
  generateHTML(data.hits);
}

function generateHTML(results) {
  container.classList.remove("initial");
  let generatedHTML = "";
  results.map((result) => { 
    generatedHTML += `
    
      <div class="item">
        <div class="item-container">
        <img src="${result.recipe.image}" alt="img">
        <div class="flex-container">
          <h3 class="title">${result.recipe.label}</h3>
          <a class="waves-effect waves-light btn view-btn" target="_blank" href="${
            result.recipe.url
          }">View Recipe</a>
          <a class="waves-effect waves-light btn favoriteRecipe"">Add to Favorites</a>
        </div>
        <p class="item-data">Calories: ${result.recipe.calories.toFixed(2)}</p>
        <p class="item-data">Diet label: ${
          result.recipe.dietLabels.length > 0
            ? result.recipe.dietLabels
            : "No Data Found"
        }</p>
        <p class="item-data">Health labels: ${result.recipe.healthLabels}</p>
        </div
      </div>
    `;
  });
  searchResultDiv.innerHTML = generatedHTML;
}



// WORKOUT DIV

var i = -1;

$("#previousWorkout").hide();
$("#favoriteWorkout").hide();

function displayWorkouts() {
    fetch("https://wger.de/api/v2/exercise/?language=2&" + $("#equipment").val() + "&" + $("#category").val())
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
      $("#favoriteWorkout").show();
      if (i === 0) {
        $("#previousWorkout").hide();
      }
      if (i > 0) {
        $("#previousWorkout").show();
      }
      if (i === data.results.length-1) {
        $("#nextWorkout").hide();
      } else {
        $("#nextWorkout").show();
      }

      if (data.results.length === 0) {
        $("#nameDisplay").html("<h3>No results found. Please try different criteria.</h3>");
        return;
      }

      $("#nameDisplay").html("<h2>" + data.results[i].name + "</h2>");            
      $("#descriptionDisplay").html("<h3>Description: </h3>" + data.results[i].description);
    })
}

var workoutArray = [];
var storageItems = getStorageItems();

for (var e = 0; e < storageItems.length; e++) {
  workoutArray.push(storageItems[e]);
  $("#workoutListContainer").append("<li class='workoutList'>" + storageItems[e] + "</li>");
}

$("#favoriteWorkout").click(function() {
  $("#workoutListContainer").append("<li class='workoutList'>" + $("#nameDisplay").text() + "</li>");
  $(this).hide();
  workoutArray.push($("#nameDisplay").text());
  localStorage.setItem("Workouts", JSON.stringify(workoutArray));
})

function getStorageItems() {
  var savedWorkouts = JSON.parse(localStorage.getItem("Workouts")) || [];
  return savedWorkouts;
}

$("li").click(function() {
  console.log($(this).text());
})

$("#previousWorkout").click(function() {
  i--;
  displayWorkouts();
})

$("#nextWorkout").click(function() {
  i++;
  displayWorkouts();
})