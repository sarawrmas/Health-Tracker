import React, { useState } from 'react';
import { Container, Col, Row, Button, Select } from 'react-materialize';
import ResultCollection from '../components/Collection';

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
    {category: "target", display: "Abs", slug: "abs"},
    {category: "target", display: "Biceps", slug: "biceps"},
    {category: "target", display: "Calves", slug: "calves"},
    {category: "target", display: "Delts", slug: "delts"},
    {category: "target", display: "Forearms", slug: "forearms"},
    {category: "target", display: "Glutes", slug: "glutes"},
    {category: "target", display: "Hamstrings", slug: "hamstrings"},
    {category: "target", display: "Lats", slug: "lats"},
    {category: "target", display: "Pectorals", slug: "pectorals"},
    {category: "target", display: "Quads", slug: "quads"},
    {category: "target", display: "Traps", slug: "traps"},
    {category: "target", display: "Triceps", slug: "triceps"},
    {category: "target", display: "Upper Back", slug: "upper back"},
    {category: "equipment", display: "Barbell", slug: "barbell"},
    {category: "equipment", display: "Body Weight", slug: "body weight"},
    {category: "equipment", display: "Bosu Ball", slug: "bosu ball"},
    {category: "equipment", display: "Cable", slug: "cable"},
    {category: "equipment", display: "Dumbbell", slug: "dumbbell"},
    {category: "equipment", display: "Elliptical Machine", slug: "elliptical machine"},
    {category: "equipment", display: "EZ Barbell", slug: "ez barbell"},
    {category: "equipment", display: "Kettlebell", slug: "kettlebell"},
    {category: "equipment", display: "Medicine Ball", slug: "medicine ball"},
    {category: "equipment", display: "Resistance Band", slug: "resistance band"},
    {category: "equipment", display: "Stability Ball", slug: "stability ball"},
    {category: "equipment", display: "Stationary Bike", slug: "stationary bike"}
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
                  <option value={muscle.slug} key={muscle.slug} category={muscle.category}>
                    {muscle.display}
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
                  <option value={equipment.slug} key={equipment.slug}>
                    {equipment.display}
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