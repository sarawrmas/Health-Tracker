import React from 'react';
import { prettifyString } from '../utils/helpers';
import { Table } from 'react-materialize';

const MealModal = (props) => {
  const { currentResult, type } = props

  return (
    <div className="center-align modal-div teal-text">
      <h4>{prettifyString(currentResult.name)}</h4>
      <img src={`${currentResult.img}`}></img>
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
            <a href={`${currentResult.url}`} target="_blank">View full recipe &rarr;</a>
            {/* <h5>Per Serving:</h5>
            <p><span>Calories:</span> {Math.ceil(currentResult.calories)}</p>
            <p><span>Carbs:</span> {Math.ceil(currentResult.carbs)} g</p>
            <p><span>Protein:</span> {Math.ceil(currentResult.protein)} g</p>
            <p><span>Fat:</span> {Math.ceil(currentResult.fat)} g</p>
            <a href={`${currentResult.url}`} target="_blank">View full recipe &rarr;</a> */}
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
            {/* <p><span>Target:</span> {prettifyString(currentResult.target)}</p>
            <p><span>Category:</span> {prettifyString(currentResult.bodyPart)}</p>
            <p><span>Equipment Needed:</span> {prettifyString(currentResult.equipment)}</p> */}
          </>
        )}

      </div>
    </div>
  )
}

export default MealModal;