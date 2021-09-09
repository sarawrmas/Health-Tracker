import React, { useState } from 'react';
import M from "materialize-css";
import { Container, Col, Row, Button, Select, TextInput } from 'react-materialize';

const Meal = () => {
  const [searchTerm, setSearchTerm] = useState('');

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems, {});
  });

  const diets = [
    "Keto",
    "Atkins",
    "Paleo",
    "Vegan",
    "Vegetarian",
    "Whole30",
    "Mediterranean",
    "Dairy-Free",
    "Gluten-Free"
  ]

  const handleChange = async (e) => {
    e.preventDefault();
    try {
      await setSearchTerm(e.target.value);
    } catch (err) {
      console.error(err)
    }
  }

  const displayMeals = (e) => {
    e.preventDefault();
    console.log(searchTerm)
    fetch(`https://api.edamam.com/search?q=${searchTerm}&app_id=4880b60b&app_key=666fc7aae49b7d09c73d7b188e13f80b&from=0&to=50`)
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
      <h2 className="center-align">Plan Meals</h2>
      <Container className="center-align">
        <Row>
          <Col className="s12 m12 l5">
            <form className="search-form" onSubmit={displayMeals}>
              <h3>Select from diets:</h3>
              <Select onChange={handleChange} value="">
                <option disabled value="" />
                {diets.map(diet =>(
                  <option value={diet.toLowerCase()} key={diet}>
                    {diet}
                  </option>
                ))}
              </Select>
              <Button>Find</Button>
            </form>
          </Col>
          <Col className="s12 m12 l2">
            <h3 className="form-separator">OR</h3>
          </Col>
          <Col className="s12 m12 l5">
            <form className="search-form">
            <h3>Search:</h3>
              <TextInput id="food-search" placeholder="Chicken, Lentils, Smoothies..." />
              <Button onClick={() => displayMeals}>Find</Button>
            </form>
          </Col>
        </Row>
      </Container>
      <div>
        <p>{searchTerm}</p>
      </div>
    </div>
  )
}

export default Meal;