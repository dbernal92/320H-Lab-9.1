import Header from './Header'
import AddToDo from './AddToDo'
import ToDoList from './ToDoList'
import { useReducer, useEffect } from 'react';

// Ensure initial state is always an array
const initialState = JSON.parse(localStorage.getItem("todos")) || [];

function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, { text: action.text, completed: false }];
        case "EDIT_TODO":
            return state.map((todo, i) =>
                i === action.index ? { ...todo, text: action.text } : todo
            );
        case "COMPLETE_TODO":
            return state.map((todo, index) =>
                index === action.index ? { ...todo, completed: !todo.completed } : todo
            );
        case 'REMOVE_TODO':
            return state.filter((todo, index) => index !== action.index);
        default:
            throw new Error();
    }
}

function Main() {
    // Define `todos` before using it inside `useEffect`
    const [todos, dispatch] = useReducer(reducer, initialState);

    // Move `useEffect` inside `Main()`
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]); // Runs every time `todos` changes

    return (
        <div>
            <AddToDo dispatch={dispatch} />
            <ToDoList todos={todos} dispatch={dispatch} />
        </div>
    );
}

export default Main;
