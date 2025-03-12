import Header from './Header'
import AddToDo from './AddToDo'
import ToDoList from './ToDoList'
import { useReducer } from 'react'

const initialState = [];

function reducer(state, action) {

    switch (action.type) {
        case 'ADD_TODO':
            return [...state, { text: action.text, completed: false }];
        case "EDIT_TODO":
            return state.map((todo, index) =>
                index === action.index ? { ...todo, text: action.text } : todo);
        case "COMPLETE_TODO":
            return state.map((todo, index) =>
                index === action.index ? { ...todo, completed: !todo.completed } : todo);
        case 'REMOVE_TODO':
            return state.filter((todo, index) => index !== action.index);
        default:
            throw new Error();
    }
}

function Main() {

    const [todos, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <AddToDo dispatch={dispatch} />
            <ToDoList todos={todos} dispatch={dispatch} />
        </div>
    );

}

export default Main;