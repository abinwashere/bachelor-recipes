import React from 'react';
import dayjs from 'dayjs';

const RecipeSummary = ({recipe}) =>{
  console.log(recipe);
  const date = dayjs(recipe.createdAt.toDate()).format('DD/MM/YYYY');
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{recipe.title}</span>
        <p>Posted by {recipe.authorFirstName} {recipe.authorLastName}</p>
        <p className="grey-text">{date}</p>
      </div>
    </div>
  )
}

export default RecipeSummary;