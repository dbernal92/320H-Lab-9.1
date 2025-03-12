import ToDoListItem from "./ToDoListItem";

function ToDoList({ todos, dispatch }) {
    return (
        <div>
            {todos.map((todo, index) => (
                <ToDoListItem 
                    key={index} 
                    todo={todo} 
                    index={index} 
                    dispatch={dispatch} 
                />
            ))}
        </div>
    );
}

export default ToDoList;
