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



    const Calendar = document.querySelector(".calendar-dates");
    M.Datepicker.init(Calendar,{});
    //format: 'dd//mmmm/yyyy',
    //showClearBtn:true,
    //i18n:{
       // clear: 'remove', //i18n:{} creates a delete button and you can name it remove instead of 'clear'
       // done: 'yes',
       // cancel: 'No',
