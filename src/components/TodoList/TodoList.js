import { Button, Col, Input, Row, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Todo from "../Todo/Todo";

import { todoRemainingSelector } from "../redux/selectors";

import axios from "axios";
import todoListSlice from "./TodoListSlice";

function TodoList() {
    const todoList = useSelector(todoRemainingSelector);

    const [todoName, setTodoName] = useState("");
    const [priority, setPriority] = useState("Medium");

    const dispatch = useDispatch();

    const handleAddButtonClick = () => {
        if (!todoName.trim()) return;
        axios
            .post("https://apis.encacap.dev:22400/todos", {
                name: todoName,
                priority,
            })
            .then((res) => {
                const {
                    data: { data },
                } = res;
                dispatch(
                    todoListSlice.actions.addTodo({
                        ...data,
                        id: data._id,
                    })
                );
            });
        setTodoName("");
        setPriority("Medium");
    };

    const handleInputChange = (e) => {
        setTodoName(e.target.value);
    };
    const handlePriorityChange = (value) => {
        setPriority(value);
    };

    const renderTodoList = () => {
        return todoList.map((todo) => {
            return (
                <Todo key={todo.id} id={todo.id} name={todo.name} priority={todo.priority} completed={todo.completed} />
            );
        });
    };

    return (
        <Row style={{ height: "calc(100% - 40px)" }}>
            <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }} id="todo_container">
                {renderTodoList()}
            </Col>

            <Col span={24}>
                <Input.Group style={{ display: "flex" }} compact>
                    <Input name="name" value={todoName} onChange={handleInputChange} />
                    <Select defaultValue="Medium" value={priority} onChange={handlePriorityChange} id="select">
                        <Select.Option value="Hight" label="High">
                            <Tag color="red" id="high">
                                High
                            </Tag>
                        </Select.Option>
                        <Select.Option value="Medium" label="Medium">
                            <Tag color="blue">Medium</Tag>
                        </Select.Option>
                        <Select.Option value="Low" label="Low">
                            <Tag color="gray">Low</Tag>
                        </Select.Option>
                    </Select>
                    <Button type="primary" onClick={handleAddButtonClick} id="add_todo">
                        Add
                    </Button>
                </Input.Group>
            </Col>
        </Row>
    );
}

export default TodoList;

