import React, { useState } from 'react';
// import M from 'materialize-css';
import { Container, Col, Row, Button, Select } from 'react-materialize';

const Workout = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = async (e) => {
    try {
      await setSearchTerm(e.target.value);
    } catch (err) {
      console.error(err)
    }
  }

  const muscles = [
    "Abs",
    "Biceps",
    "Calves",
    "Delts",
    "Forearms",
    "Glutes",
    "Hamstrings",
    "Lats",
    "Pectorals",
    "Quads",
    "Traps",
    "Triceps",
    "Upper Back"
  ]

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

  function displayWorkouts(category) {
    fetch(`https://exercisedb.p.rapidapi.com/exercises/${category}/${searchTerm}`, {
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
    <div>
      <h2 className="center-align">Search Workouts</h2>
      <Container className="center-align">
        <Row>
          <Col className="s12 m12 l5">
            <form className="search-form">
              <h3>By Target Muscle:</h3>
              <Select onChange={handleChange} value="">
                <option disabled value="" />
                {muscles.map(muscle =>(
                  <option value={muscle.toLowerCase()} key={muscle}>
                    {muscle}
                  </option>
                ))}
              </Select>
              <Button onClick={() => displayWorkouts('target')}>Find</Button>
            </form>
          </Col>
          <Col className="s12 m12 l2">
            <h3 className="form-separator">OR</h3>
          </Col>
          <Col className="s12 m12 l5">
            <form className="search-form">
            <h3>By Available Equipment:</h3>
              <Select onChange={handleChange} value="">
                <option disabled value="" />
                {equipment.map(name =>(
                  <option value={name.toLowerCase()} key={name}>
                    {name}
                  </option>
                ))}
              </Select>
              <Button onClick={() => displayWorkouts('equipment')}>Find</Button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Workout;