import React from 'react';
import RecipeSummary from './RecipeSummary';
import { Link } from 'react-router-dom';

const RecipeList = ({recipes}) => {
  return (
    <div className="project-list section">
      {recipes && recipes.map((r)=>{
        return (
          <Link to={'/project/' + r.id} key={r.id}>
            <RecipeSummary recipe={r} />
          </Link>
        )
      })}
    </div>
  )
}

export default RecipeList;