import { useState } from "react";
import Checkbox from "./CheckBox";
import Button from "./Button";

function ToDoListItem({ todo, index, dispatch }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    const handleSave = () => {
        dispatch({ type: "EDIT_TODO", index, text: editText });
        setIsEditing(false);
    };

    return (
        <div>
            <Checkbox 
                checked={todo.completed} 
                onChange={() => dispatch({ type: "COMPLETE_TODO", index })}
            />

            {isEditing ? (
                <input 
                    type="text" 
                    value={editText} 
                    onChange={(e) => setEditText(e.target.value)}
                />
            ) : (
                <span>{todo.text}</span>
            )}

            {isEditing ? (
                <Button label="Save" onClick={handleSave} />
            ) : (
                <Button label="Edit" onClick={() => setIsEditing(true)} />
            )}

            <Button 
                label="Delete" 
                disabled={!todo.completed} 
                onClick={() => dispatch({ type: "REMOVE_TODO", index })} 
            />
        </div>
    );
}

export default ToDoListItem;
