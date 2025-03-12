import { useState } from "react";
import Button from "./Button";

function Form({ dispatch }) {
    console.log("Form received dispatch:", dispatch);
    const [inputValue, setInputValue] = useState(""); // Track input

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!inputValue.trim()) return;  
    
        console.log("Dispatching ADD_TODO with text:", inputValue); // Debugging
        dispatch({ type: "ADD_TODO", text: inputValue }); 
    
        setInputValue(""); 
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
