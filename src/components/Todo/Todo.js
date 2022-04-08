import { Checkbox, Row, Tag } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
// import * as actions from '../redux/actions'
import todoListSlice from "../TodoList/TodoListSlice";
const priorityColorMapping = {
    High: "red",
    Medium: "blue",
    Low: "gray",
};

function Todo({ name, priority, completed, id }) {
    const dispatch = useDispatch();

    const [checked, setChecked] = useState(completed);

    const toggleChecked = () => {
        setChecked((checked) => !checked);
        // dispatch(actions.toggleComplete(id))
        dispatch(todoListSlice.actions.complete(id));
    };
    return (
        <Row
            justify="space-between"
            style={{
                marginBottom: 3,
                ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
            }}
        >
            <Checkbox checked={checked} onChange={toggleChecked}>
                {name}
            </Checkbox>
            <Tag color={priorityColorMapping[priority]} style={{ margin: 0 }}>
                {priority}
            </Tag>
        </Row>
    );
}

export default Todo;
