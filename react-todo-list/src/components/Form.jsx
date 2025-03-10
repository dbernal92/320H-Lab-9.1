import Button from "./Button";

function Form() {
    const handleSubmit = (event) => {
        event.preventDefault();
        //Reset form
        event.target.reset();
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="todo">
                <input type="text" name="todo" id="todo" placeholder="Type your task!" />
            </label>
            <Button label="Add" type="submit" />
        </form>
    );
}

export default Form