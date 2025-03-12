import { useState } from "react";
import Button from "./Button";

function Form({ dispatch }) {
    const [inputValue, setInputValue] = useState(""); // Track input

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!inputValue.trim()) return; // Prevent empty todos

        dispatch({ type: "ADD_TODO", text: inputValue }); // Send to reducer
        setInputValue(""); // Clear input after adding
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="todo">
                <input 
                    type="text" 
                    name="todo" 
                    id="todo" 
                    placeholder="Type your task!" 
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)} 
                />
            </label>
            <Button label="Add" type="submit" />
        </form>
    );
}

export default Form;
