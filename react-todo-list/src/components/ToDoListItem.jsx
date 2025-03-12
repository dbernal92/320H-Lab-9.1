import Checkbox from "./CheckBox";
import Button from "./Button";

function ToDoListItem() {
    return (
        <div>
            <Checkbox 
                checked={todo.completed} 
                onChange={() => dispatch({ type: "COMPLETE_TODO", index })}
            />
            <span>{todo.text}</span>
            <Button label="Edit" />
            <Button 
                label="Delete" 
                disabled={!todo.completed} 
                onClick={() => dispatch({ type: "REMOVE_TODO", index })} 
            />
        </div>
    )
}

export default ToDoListItem