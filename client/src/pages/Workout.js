import React from 'react';
import M from 'materialize-css';
// import { Modal, Button, Card, Container, Row, Col, Icon } from 'react-materialize';

const Workout = () => {
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

  return (
    <div id="workoutDiv">
      <h2 className="center-align">Search Workouts</h2>
      <div className="container">
        <div className="row">
            <div className="col s12 m6 l6">
              <select className="workout-type">
                <option value="" disabled selected>By Type</option>
                {types.map(type =>(
                  <option value={type.toLowerCase()} key={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div class="col s12 m6 l6">
              <select className="equipment">
                <option value="" disabled selected>By Equipment</option>
                {equipment.map(name =>(
                  <option value={name.toLowerCase()} key={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Workout;