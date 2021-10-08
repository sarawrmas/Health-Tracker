import React, { useState } from 'react';
import { Container, Col, Row, Button, Select, Tabs, Tab } from 'react-materialize';
import ResultCollection from '../components/Collection';
import { prettifyString } from '../utils/helpers';

const Workout = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchCategory, setSearchCategory] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (e) => {
    setCurrentPage(e)
  }

  const indexOfLastResult = currentPage * 20; // 20 posts per page
  const indexOfFirstResult = indexOfLastResult - 20; // 20 posts per page
  const currentResults = searchResults.slice(indexOfFirstResult, indexOfLastResult)

  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
    setSearchCategory(searchQuery.find(({ name }) => name === e.target.value).category)
  }

  const searchQuery = [
    {category: "target", name: "abs"},
    {category: "target", name: "biceps"},
    {category: "target", name: "calves"},
    {category: "target", name: "delts"},
    {category: "target", name: "forearms"},
    {category: "target", name: "glutes"},
    {category: "target", name: "hamstrings"},
    {category: "target", name: "lats"},
    {category: "target", name: "pectorals"},
    {category: "target", name: "quads"},
    {category: "target", name: "traps"},
    {category: "target", name: "triceps"},
    {category: "target", name: "upper back"},
    {category: "equipment", name: "barbell"},
    {category: "equipment", name: "body weight"},
    {category: "equipment", name: "bosu ball"},
    {category: "equipment", name: "cable"},
    {category: "equipment", name: "dumbbell"},
    {category: "equipment", name: "elliptical machine"},
    {category: "equipment", name: "ez barbell"},
    {category: "equipment", name: "kettlebell"},
    {category: "equipment", name: "medicine ball"},
    {category: "equipment", name: "resistance band"},
    {category: "equipment", name: "stability ball"},
    {category: "equipment", name: "stationary bike"}
  ]

  const displayWorkouts = (e) => {
    e.preventDefault();

    fetch(`https://exercisedb.p.rapidapi.com/exercises/${searchCategory}/${searchTerm}`, {
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
        const results = data.map(result => ({
          name: result.name,
          id: result.id,
          target: result.target,
          equipment: result.equipment,
          bodyPart: result.bodyPart,
          img: result.gifUrl
        }));

        setSearchResults(results)
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
          <Col s={12} m={12} l={12}>
          <Tabs className="tabs-fixed-width">
            <Tab idx="muscle-search" title="Target Muscle">
            <form className="search-form" onSubmit={displayWorkouts}>
              <h3 className="teal-text">Find an exercise by target muscle:</h3>
              <Select onChange={handleChange} value="">
                <option disabled value="" />
                {searchQuery.filter(list => list.category === "target").map(muscle =>(
                  <option value={muscle.name} key={muscle.name} category={muscle.category}>
                    {prettifyString(muscle.name)}
                  </option>
                ))}
              </Select>
              <Button className="waves-effect">Find</Button>
            </form>
            </Tab>
          <Tab idx="equipment-search" title="Equipment">
            <form className="search-form" onSubmit={displayWorkouts}>
            <h3 className="teal-text">Find an exercise by equipment:</h3>
              <Select onChange={handleChange} value="">
                <option disabled value="" />
                {searchQuery.filter(list => list.category === "equipment").map(equipment =>(
                  <option value={equipment.name} key={equipment.name}>
                    {prettifyString(equipment.name)}
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
        searchType={"workout"}
      />
    </div>
  )
}

export default Workout;