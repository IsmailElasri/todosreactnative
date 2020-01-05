
let todoId = 31
let init= false;
let alltoggled = true;




export const fetchTodosFromAPI = (data) =>{ 
    if (init == false){
     init=true;
    return ({
        type : 'GET_TODOS_FROM_API',
        todos : data
    })}
    else return{
        data: []
    }
 
}
export const addTodo = (title)=> ({
    type: 'ADD_TODO',
    id: todoId++,
    title,
    
})

export const toggleAllTodos = ()=>{ alltoggled=!alltoggled; return ({
    type: 'TOGGLE_ALL_TODOS',
    alltoggled:alltoggled
})
}



export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id 
})


export const deleteTodo = (id) => ({
    type: 'DELETE_TODO',
    id
}
)


export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
  }

export const setVisibilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})
