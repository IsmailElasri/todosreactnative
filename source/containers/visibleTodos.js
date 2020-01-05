import  { connect } from 'react-redux'
import listTodos from '../components/listTodos'
import {toggleTodo} from '../actions/actions'
import { deleteTodo } from '../actions/actions'
import { VisibilityFilters } from '../actions/actions'

// On importe le component listTodos qui prend en argument la liste des todos et les fonctions utilisés
// pour toggle, supprimer et modifier 


// C'est cette fonction qui sera responsable de filtrer la liste de todos 
// Elle prend en argument le filtre utilisé qu'on va récupéré 
// du reducer de filtrage qui est déjà modifié quand on appuie sur les bouttons show all/active/done 
// Si le la valeur du filtre n'est pas indiquée (default) alors ça sera une recherche 

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
      case VisibilityFilters.SHOW_ALL:
        return todos
      case VisibilityFilters.SHOW_COMPLETED:
        return  todos.filter(function(todo){
        return todo.completed
        })
      case VisibilityFilters.SHOW_ACTIVE:
        return todos.filter(function(todo){
            return !todo.completed
            })
      default:
         return todos.filter(function(todo){
             return todo.title.toLowerCase().includes(filter.toLowerCase());
         })
         
    }
  }


//ici on récupère la liste des todos depuis le store avec la fonction mapStateToProps, 
// ainsi la valeur du filtre utilisé 
// voir le combiner ../reducers/index
const mapStateToProps = state => ({
    todos:getVisibleTodos(state.todos,  state.visibilityFilter)
})


// ici on va utiliser les actions du store et donc il nous faut la mapDispatchToProps
// pour  faire les modifications sur les todos


const mapDispatchToProps = dispatch => ({
    toggleTodo:id => dispatch(toggleTodo(id)),
    deleteTodo:id => dispatch(deleteTodo(id)),
    //MODIFICATION PAS ENCORE FAITE
    editTodo:id => console.log(id)
    })


// Comme on a dit il faut connecter le componenet avec le store pour pouvoir y accéder 
export default connect(mapStateToProps,mapDispatchToProps)(listTodos)