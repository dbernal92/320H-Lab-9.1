import Form from "./Form";

function AddToDo({ dispatch }) { 
    console.log("AddToDo received dispatch:", dispatch); // Debugging

    return (
        <div>
            <Form dispatch={dispatch} />
        </div>
    );
}

export default AddToDo;