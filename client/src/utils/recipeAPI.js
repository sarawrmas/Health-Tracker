// const searchForm = document.querySelector("form");
// const searchResultDiv = document.querySelector(".search-result");
// const container = document.querySelector(".container");
// let searchQuery = "";
// const APP_ID = "4880b60b";
// const APP_key = "666fc7aae49b7d09c73d7b188e13f80b";

// searchForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   searchQuery = e.target.querySelector("input").value;
//   fetchAPI();
// });

// async function fetchAPI() {
//   const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&from=0&to=20`;
//   const response = await fetch(baseURL);
//   const data = await response.json();
//   generateHTML(data.hits);
// }

// var recipeArray = [];

// function generateHTML(results) {
//   container.classList.remove("initial");
//   let generatedHTML = "";
//   results.map((result) => { 
//     // var recipeName = result.recipe;
//     // recipeArray.push(recipeName);
//     // console.log(result.recipe.label);

//     generatedHTML += `
    
//       <div class="item">
//         <div class="item-container">
//         <img src="${result.recipe.image}" alt="img">
//         <div class="flex-container">
//           <h3 class="title">${result.recipe.label}</h3>
//           <a class="waves-effect waves-light btn view-btn" target="_blank" href="${
//             result.recipe.url
//           }">View Recipe</a>
//           <p>Click below to save this recipe to your favorites</p>
//           <a class="waves-effect waves-light btn favoriteRecipe">${result.recipe.label}</a>
//         </div>
//         <p class="item-data">Calories: ${result.recipe.calories.toFixed(2)}</p>
//         <p class="item-data">Diet label: ${
//           result.recipe.dietLabels.length > 0
//             ? result.recipe.dietLabels
//             : "No Data Found"
//         }</p>
//         <p class="item-data">Health labels: ${result.recipe.healthLabels}</p>
//         </div
//       </div>
//     `;
    
//   });
  
//   searchResultDiv.innerHTML = generatedHTML;
  
//   $(".favoriteRecipe").click(function() {
//     var recipeName = $(this).text();
//     $("#recipeListContainer").append("<li class='recipeList'>" + recipeName + "</li>")
//     recipeArray.push(recipeName);
//     localStorage.setItem("Recipes", JSON.stringify(recipeArray));
//   })
  
// }