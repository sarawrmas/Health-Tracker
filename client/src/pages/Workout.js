import React, { useState } from 'react';
import M from 'materialize-css';
// import { displayWorkouts } from '../utils/workoutAPI';
import { Select, Button } from 'react-materialize';

const Workout = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = async (e) => {
    try {
      await setSearchTerm(e.target.value);
    } catch (err) {
      console.error(err)
    }
  }

  const types = [
    "Back",
    "Cardio",
    "Chest",
    "Lower Arms",
    "Lower Legs",
    "Neck",
    "Shoulders",
    "Upper Arms",
    "Upper Legs",
    "Waist"
  ];

  const equipment = [
    "Barbell",
    "Body Weight",
    "Bosu Ball",
    "Cable",
    "Dumbbell",
    "Elliptical Machine",
    "EZ Barbell",
    "Kettlebell",
    "Medicine Ball",
    "Resistance Band",
    "Stability Ball",
    "Stationary Bike"
  ];

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems, {});
  });

  function displayWorkouts(criteria) {
    fetch(`https://exercisedb.p.rapidapi.com/exercises/${criteria}/${searchTerm}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "exercisedb.p.rapidapi.com",
        "x-rapidapi-key": "9ad70f7a66msh5f746fbfe9bbaaap1330c1jsn283357ca9687"
      }
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data)
    })
    .catch(err => {
      console.error(err);
    });
  }

  return (
    <div id="workoutDiv">
      <h2 className="center-align">Search Workouts</h2>
      <div className="container">
        <div className="row">
            <div className="col s12 m6 l6">
              <Select onChange={handleChange} value="">
                <option disabled value="" />
                {types.map(type =>(
                  <option value={type.toLowerCase()} key={type}>
                    {type}
                  </option>
                ))}
              </Select>
              <Button onClick={() => displayWorkouts('bodyPart')}>Search By Type</Button>
            </div>
            <div className="col s12 m6 l6">
              <Select onChange={handleChange} value="">
                <option disabled value="" />
                {equipment.map(name =>(
                  <option value={name.toLowerCase()} key={name}>
                    {name}
                  </option>
                ))}
              </Select>
              <Button onClick={() => displayWorkouts('equipment')}>Search By Equipment</Button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Workout;