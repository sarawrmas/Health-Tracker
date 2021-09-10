import React, { useState } from 'react';
import M from "materialize-css";
import { Container, Col, Row, Button, Select, TextInput } from 'react-materialize';
import ResultCollection from '../components/Collection';

const Meal = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchResults, setSearchResults] = useState([]);

  const paginate = (e) => {
    setCurrentPage(e)
  }

  const indexOfLastResult = currentPage * 20; // 20 posts per page
  const indexOfFirstResult = indexOfLastResult - 20; // 20 posts per page
  const currentResults = searchResults.slice(indexOfFirstResult, indexOfLastResult)

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

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value)
    setSearchTerm(e.target.value);
  }

  const displayDiet = (e) => {
    e.preventDefault();
    console.log(searchTerm)
    fetch(`https://api.edamam.com/search?q=${searchTerm}&app_id=4880b60b&app_key=666fc7aae49b7d09c73d7b188e13f80b&from=0&to=100`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data.hits)
      const results = data.hits.map(result => ({
        name: result.recipe.label,
      }));
      setSearchResults(results)
    })
    .catch(err => {
      console.error(err);
    });
  }

  const displaySearch = (e) => {
    e.preventDefault();
    console.log(searchInput)
    fetch(`https://api.edamam.com/search?q=${searchInput}&app_id=4880b60b&app_key=666fc7aae49b7d09c73d7b188e13f80b&from=0&to=100`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data.hits)
      const results = data.hits.map(result => ({
        name: result.recipe.label,
      }));
      setSearchResults(results)
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
            <form className="search-form" onSubmit={displayDiet}>
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
            <form className="search-form" onSubmit={displaySearch}>
            <h3>Search:</h3>
              <TextInput
                id="food-search"
                placeholder="Chicken, Lentils, Smoothie..."
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <Button>Find</Button>
            </form>
          </Col>
        </Row>
      </Container>
      <ResultCollection
        paginate={paginate}
        resultList={currentResults}
        resultLength={searchResults.length}
        searchTerm={searchTerm || searchInput}
      />
    </div>
  )
}

export default Meal;