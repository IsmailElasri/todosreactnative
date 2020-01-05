
// Ceci est le reducer des todos 


const todos = (state=[],action)=>{
    switch(action.type){
        case 'ADD_TODO':{
            return[
               {
                    id:action.id,
                    title: action.title,
                    completed:false
                },...state
            ]
        }
        
        case 'TOGGLE_TODO':{
            return state.map(todo=>
                (todo.id === action.id)
                ?{...todo,completed:!todo.completed} :
                todo)
                
            }
        case 'TOGGLE_ALL_TODOS':{
            return state.map(todo => {
             if (action.alltoggled == false)
             return {...todo, completed:true}
             else return {...todo, completed:false}
            }
             )
        }


        case 'GET_TODOS_FROM_API':{
            return  [...state, ...action.todos];
        }
        
        case 'DELETE_TODO':{
             let data =[...state];

             state.map(todo=>{ 
                if (todo.id == action.id){
                state.splice(index,1);
                data = [...state]
                }            
                index++;
            }   
            )
            index =0;
            return data;
        }
        default:
            return state
    }
}

export default todos