import { combineReducers } from 'redux';
import todos from './todos'
import visibilityFilter from './visibilitytodo'

// cette fonction va nous permettre de combiner tous les reducers 
// et créer un seul reducer pour l'utiliser dans
// l'application 

export default combineReducers({
    todos,
    visibilityFilter
})