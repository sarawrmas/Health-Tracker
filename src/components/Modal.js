import React from 'react';
import { prettifyString } from '../utils/helpers';

const MealModal = (props) => {
  const { currentResult, type } = props

  return (
    <div className="center-align modal-div">
      <h4>{prettifyString(currentResult.name)}</h4>
      <img src={`${currentResult.img}`}></img>
      <div className="modal-info">
        {type === "meal" ? (
          <>
            <h5>Per Serving:</h5>
            <p>Calories: {Math.ceil(currentResult.calories)}</p>
            <p>Carbs: {Math.ceil(currentResult.carbs)} g</p>
            <p>Protein: {Math.ceil(currentResult.protein)} g</p>
            <p>Fat: {Math.ceil(currentResult.fat)} g</p>
            <a href={`${currentResult.url}`} target="_blank">View full recipe &rarr;</a>
          </>
        ) : (
          <>
            <p>Target: {prettifyString(currentResult.target)}</p>
            <p>Category: {prettifyString(currentResult.bodyPart)}</p>
            <p>Equipment Needed: {prettifyString(currentResult.equipment)}</p>
          </>
        )}

      </div>
    </div>
  )
}

export default MealModal;