import React from 'react';
import M from 'materialize-css';
import { Button } from 'react-materialize';

const Meal = () => {
  const diets = [
    "Keto",
    "Atkins",
    "Paleo",
    "Vegan",
    "Vegetarian",
    "Whole30",
    "Mediterranean"
  ]

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems, {});
  });

  return (
    <div id="recipeDiv">
      <h2 className="center-align">Plan Meals</h2>
      <div className="container">
        <div className="row">
            <div className="col s12 m6 l6">
              <label htmlFor="search-term">Search By Keyword</label>
              <input placeholder="Search 'chicken', 'lentils', 'smoothie'..." id="search-term"/>
              <Button>Search</Button>
            </div>
            <div className="col s12 m6 l6">
              <select className="diet-list">
                <option value="" disabled selected>Diet Preference</option>
                {diets.map(diet =>(
                  <option value={diet.toLowerCase()} key={diet}>
                    {diet}
                  </option>
                ))}
              </select>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Meal;