import React, { useState } from 'react';
import { Container, Col, Row, Button, Select } from 'react-materialize';
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
    setSearchCategory(searchQuery.find(({ slug }) => slug === e.target.value).category)
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
        console.log(data)
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
          <Col className="s12 m12 l5">
            <form className="search-form" onSubmit={displayWorkouts}>
              <h3>By Target Muscle:</h3>
              <Select onChange={handleChange} value="">
                <option disabled value="" />
                {searchQuery.filter(list => list.category === "target").map(muscle =>(
                  <option value={muscle.name} key={muscle.name} category={muscle.category}>
                    {prettifyString(muscle.name)}
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
            <form className="search-form" onSubmit={displayWorkouts}>
            <h3>By Available Equipment:</h3>
              <Select onChange={handleChange} value="">
                <option disabled value="" />
                {searchQuery.filter(list => list.category === "equipment").map(equipment =>(
                  <option value={equipment.name} key={equipment.name}>
                    {prettifyString(equipment.name)}
                  </option>
                ))}
              </Select>
              <Button>Find</Button>
            </form>
          </Col>
        </Row>
      </Container>
      <ResultCollection
        paginate={paginate}
        resultList={currentResults}
        resultLength={searchResults.length}
        searchTerm={searchTerm}
        searchType={"workout"}
      />
    </div>
  )
}

export default Workout;