import React, { useState } from 'react';
import M from "materialize-css";
import { Container, Col, Row, Button, Select, TextInput, Tabs, Tab, DatePicker } from 'react-materialize';
import ResultCollection from '../components/Collection';

const Meal = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchResults, setSearchResults] = useState([]);

  const paginate = (e) => {
    setCurrentPage(e)
  }

  const indexOfLastResult = currentPage * 20; // 20 per page
  const indexOfFirstResult = indexOfLastResult - 20; // 20 per page
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
    setSearchTerm(e.target.value);
  }

  const displayDiet = (e) => {
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${searchTerm}&app_id=4880b60b&app_key=666fc7aae49b7d09c73d7b188e13f80b&from=0&to=100`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      const results = data.hits.map(result => ({
        name: result.recipe.label,
        calories: result.recipe.calories / result.recipe.yield,
        carbs: result.recipe.totalNutrients.CHOCDF.quantity / result.recipe.yield,
        protein: result.recipe.totalNutrients.PROCNT.quantity / result.recipe.yield,
        fat: result.recipe.totalNutrients.FAT.quantity / result.recipe.yield,
        img: result.recipe.image || '',
        url: result.recipe.url,
        servings: result.recipe.yield,
        id: result.recipe.label + result.recipe.calories
      }));
      setSearchResults(results)
    })
    .catch(err => {
      console.error(err);
    });
  }

  const displaySearch = (e) => {
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${searchInput}&app_id=4880b60b&app_key=666fc7aae49b7d09c73d7b188e13f80b&from=0&to=100`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      const results = data.hits.map(result => ({
        name: result.recipe.label,
        calories: result.recipe.calories / result.recipe.yield,
        carbs: result.recipe.totalNutrients.CHOCDF.quantity / result.recipe.yield,
        protein: result.recipe.totalNutrients.PROCNT.quantity / result.recipe.yield,
        fat: result.recipe.totalNutrients.FAT.quantity / result.recipe.yield,
        img: result.recipe.image || '',
        url: result.recipe.url,
        servings: result.recipe.yield,
        id: result.recipe.label + result.recipe.calories
      }));
      setSearchResults(results)
    })
    .catch(err => {
      console.error(err);
    });
  }

  return (
    <div>
      <h2 className="center-align teal-text">Plan Meals</h2>
      <Container className="center-align">
        <Row>
          <Col s={12} m={12} l={12}>
          <Tabs className="tabs-fixed-width">
          <Tab idx="meal-search" title="Custom Search">
            <form className="search-form" onSubmit={displaySearch}>
            <h3 className="teal-text">Search:</h3>
              <TextInput
                id="food-search"
                placeholder="Chicken, Lentils, Smoothie..."
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <Button className="waves-effect">Find</Button>
            </form>
            </Tab>
            <Tab idx="diet-search" title="By diet">
            <form className="search-form" onSubmit={displayDiet}>
              <h3 className="teal-text">Select from diets:</h3>
              <Select onChange={handleChange} value="">
                <option disabled value="" />
                {diets.map(diet =>(
                  <option value={diet.toLowerCase()} key={diet}>
                    {diet}
                  </option>
                ))}
              </Select>
              <Button className="waves-effect">Find</Button>
            </form>
            </Tab>
          </Tabs>
          </Col>
        </Row>
      </Container>
      <ResultCollection
        paginate={paginate}
        resultList={currentResults}
        resultLength={searchResults.length}
        searchType={"meal"}
      />
    </div>
  )
}

export default Meal;