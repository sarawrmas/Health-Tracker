import React from 'react';
import { prettifyString } from '../utils/helpers';
import { Table, Button, Dropdown } from 'react-materialize';
import M from "materialize-css";
import { Link } from 'react-router-dom';

const ModalDiv = (props) => {
  const { currentResult, type } = props

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    M.Modal.init(elems, {});
  });

  return (
    <div className="center-align modal-div">
      <h4>{prettifyString(currentResult.name)}</h4>
      <img src={`${currentResult.img}`} alt={`Preview of ${currentResult.name}`}></img>
      <div className="modal-info">
        {type === "meal" ? (
          <>
            <Table
              striped={true}
              responsive={true}
            >
              <thead>
                <tr>
                  <th>Calories</th>
                  <th>Carbs</th>
                  <th>Protein</th>
                  <th>Fat</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{Math.ceil(currentResult.calories)}</td>
                  <td>{Math.ceil(currentResult.carbs)} g</td>
                  <td>{Math.ceil(currentResult.protein)} g</td>
                  <td>{Math.ceil(currentResult.fat)} g</td>
                </tr>
              </tbody>
            </Table>
            <a href={`${currentResult.url}`} target="_blank" rel="noreferrer" className="hover-el">View full recipe &rarr;</a><br />
            <Link to="/my-meals"><Button className="waves-effect">Add to Plan</Button></Link>
          </>
        ) : (
          <>
            <Table
            striped={true}
            responsive={true}
            >
              <thead>
                <tr>
                  <th>Target</th>
                  <th>Category</th>
                  <th>Equipment Needed</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{prettifyString(currentResult.target)}</td>
                  <td>{prettifyString(currentResult.bodyPart)}</td>
                  <td>{prettifyString(currentResult.equipment)}</td>
                </tr>
              </tbody>
            </Table>
            {/* <Link to="/my-sets"> */}
            <Dropdown
              id="my-sets-dropdown"
              trigger={<Button className="waves-effect">Add to Set</Button>}
            >
              
            </Dropdown>
              {/* </Link> */}
          </>
        )}
      </div>
    </div>
  )
}

export default ModalDiv;