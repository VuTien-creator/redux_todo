import { Divider, Typography } from "antd";
import "./App.css";

import Filters from "./components/Filters/Filters";
import TodoList from "./components/TodoList/TodoList";

const { Title } = Typography;

function App() {
    return (
        <div
            style={{
                width: 500,
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "white",
                padding: 20,
                boxShadow: "0 0 20px 4px rgba(0, 0, 0, 0.02)",
                borderRadius: 12,
                height: "90vh",
            }}
        >
            <Title style={{ textAlign: "center" }}>Nhóm 11 - Kiểm thử phần mềm</Title>
            <Filters />
            <Divider />
            <TodoList />
        </div>
    );
}

export default App;

