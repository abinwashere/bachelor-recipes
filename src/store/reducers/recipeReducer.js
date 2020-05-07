const initState = {
  recipes: [
    {id: '1', title: 'Japanese Curry', content: 'blah blah blah'},
    {id: '2', title: 'Crunchwrap Supreme', content: 'blah blah blah'},
    {id: '3', title: 'Bachelor Chow', content: 'blah blah blah'},
  ]
}

const recipeReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_RECIPE':
      console.log('created', action.recipe)
      return state;
    case 'CREATE_RECIPE_ERROR':
      console.log('create error', action.err)
      return state;
    default: 
      return state;
  }
}
export default recipeReducer;