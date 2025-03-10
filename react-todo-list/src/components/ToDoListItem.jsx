import Checkbox from "./CheckBox";
import Button from "./Button";

function ToDoListItem() {
    return (
        <div>
            <Checkbox />
            <Button label="Edit" />
            <Button label="Delete" disabled={!completed} />
        </div>
    )
}

export default ToDoListItem