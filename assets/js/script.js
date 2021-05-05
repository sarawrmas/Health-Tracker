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
  console.log(data);
}

function generateHTML(results) {
  container.classList.remove("initial");
  let generatedHTML = "";
  results.map((result) => { 
    generatedHTML += `
    
      <div class="item">
        <img src="${result.recipe.image}" alt="img">
        <div class="flex-container">
          <h3 class="title">${result.recipe.label}</h3>
          <a class="view-btn" target="_blank" href="${
            result.recipe.url
          }">View Recipe</a>
        </div>
        <p class="item-data">Calories: ${result.recipe.calories.toFixed(2)}</p>
        <p class="item-data">Diet label: ${
          result.recipe.dietLabels.length > 0
            ? result.recipe.dietLabels
            : "No Data Found"
        }</p>
        <p class="item-data">Health labels: ${result.recipe.healthLabels}</p>
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

      $("#nameDisplay").html("<h2>" + data.results[i].name + "</h2>");            
      $("#descriptionDisplay").html("<h3>Description: </h3>" + data.results[i].description);
      
      console.log(data.results[i].name);
      $("#favoriteWorkout").click(function() {
        $("#workoutList").append("<p>" + data.results[i].name + "</p>");
      });
    })
}

$("#previousWorkout").click(function() {
  i--;
  displayWorkouts();
})

$("#nextWorkout").click(function() {
  i++;
  displayWorkouts();
  $("#favoriteWorkout").show();
})


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
  console.log(data);
}

function generateHTML(results) {
  container.classList.remove("initial");
  let generatedHTML = "";
  results.map((result) => {
    generatedHTML += `
      <div class="item">
        <img src="${result.recipe.image}" alt="img">
        <div class="flex-container">
          <h1 class="title">${result.recipe.label}</h1>
          <a class="view-btn" target="_blank" href="${
            result.recipe.url
          }">View Recipe</a>
        </div>
        <p class="item-data">Calories: ${result.recipe.calories.toFixed(2)}</p>
        <p class="item-data">Diet label: ${
          result.recipe.dietLabels.length > 0
            ? result.recipe.dietLabels
            : "No Data Found"
        }</p>
        <p class="item-data">Health labels: ${result.recipe.healthLabels}</p>
      </div>
    `;
  });
  searchResultDiv.innerHTML = generatedHTML;
}
  

  

// WORKOUT DIV




var i = 0;

function displayWorkouts() {
    fetch("https://wger.de/api/v2/exercise/?language=2&" + $("#equipment").val() + "&" + $("#category").val())
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            i++;
            if (data.results.length === 0) {
                $("#exerciseDisplay").html("<p>No matches found. Try different criteria.</p>");
                return;
            }
            if (data.results.length === i) {
                $("#exerciseDisplay").html("<p>No more for this category</p>");
                return;
            }
            $("#nameDisplay").html("<h2>" + data.results[i].name + "</h2>");
            $("#muscleDisplay").html("<h3>Workout Type: </h3>" + $("#category option[value=" + "'" + $("#category").val() + "']").text());
            $("#equipmentDisplay").html("<h3>Equipment needed: </h3>" + $("#equipment option[value=" + "'" + $("#equipment").val() + "']").text());
            $("#descriptionDisplay").html("<h3>Description: </h3>" + data.results[i].description);
        })
}

$("#nextWorkout").click(function() {
    displayWorkouts();
})

// Check browser support
if (typeof(Storage) !== "undefined") {
  // Store
  localStorage.setItem("workout", "recipe");
  // Retrieve
  document.getElementById("result").innerHTML = localStorage.getItem("workout");
} else {
  document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}
