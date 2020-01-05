import { VisibilityFilters } from '../actions/actions'

//Ce reducer sert à modifier le filtre à chaque modification dans l'application
//Comme ça on peut modifier le filtre dans un components et récupérer le filtre dans 
// un autre component

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}
export default visibilityFilter
