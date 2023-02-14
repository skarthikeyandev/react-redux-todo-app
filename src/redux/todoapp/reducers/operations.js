import { ADD_TODO, REMOVE_TODO, DELETE_ALL, UPDATE_TODO, UPDATE_CHECKBOX } from "../actions";

const initialState = [
    {
        id:1,
        todo: "buy Laptop",
        completed: false
    },
    {
        id:2,
        todo: "master Laptop",
        completed: false
    },
    {
        id:3,
        todo: "watering Laptop",
        completed: true
    }
]

export const operationsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            return [...state, action.payload]
        case DELETE_ALL:
            return []
        case UPDATE_TODO:
            let data = action.payload;
            const updatedArray = [];
            state.forEach((item) => {
                if(item.id === data.id) {
                    item.id = data.id;
                    item.todo = data.todo;
                    item.completed = data.completed;
                }
                updatedArray.push(item);
             })
            return updatedArray;
        case REMOVE_TODO:
            const filteredTodos =  state.filter((todo)=>todo.id!==action.payload);
            return filteredTodos;
        case UPDATE_CHECKBOX:
            let todoArray = [];
            state.forEach((item) => {
                if(item.id === action.payload){
                    item.completed = !item.completed;
                }
                todoArray.push(item);
            })
            return todoArray;
        default: return state;
    }
}