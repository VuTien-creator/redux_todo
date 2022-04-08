import { Col, Input, Radio, Row, Typography } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import filtersSlice from "./FiltersSlice";

// import * as actions from '../redux/actions'

const { Search } = Input;

function Filters() {
    const dispatch = useDispatch();

    const [searchText, setSearchText] = useState("");

    const [searchStatus, setSearchStatus] = useState("All");

    // const [searchPriority, setSearchPriority] = useState([]);

    const handleInputSearch = (e) => {
        setSearchText(e.target.value);
        dispatch(filtersSlice.actions.search(e.target.value));
    };

    const handleSearchStatusChange = (e) => {
        setSearchStatus(e.target.value);
        dispatch(filtersSlice.actions.status(e.target.value));
    };

    // const handleSearchPriority = (value) => {
    //     setSearchPriority(value);
    //     dispatch(filtersSlice.actions.priority(value));
    // };

    return (
        <Row justify="center">
            <Col span={24}>
                <Typography.Paragraph style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}>
                    Serach
                </Typography.Paragraph>
                <Search placeholder="Input search text" value={searchText} onChange={handleInputSearch} />
            </Col>
            <Col sm={24}>
                <Typography.Paragraph style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}>
                    Filter By Status
                </Typography.Paragraph>
                <Radio.Group value={searchStatus} onChange={handleSearchStatusChange}>
                    <Radio value="All">All</Radio>
                    <Radio value="Completed">Completed</Radio>
                    <Radio value="Todo">Todo</Radio>
                </Radio.Group>
            </Col>
            {/* <Col sm={24}>
                <Typography.Paragraph
                    style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
                >
                    Filter By Priority
                </Typography.Paragraph>

                <Select
                    mode='multiple'
                    allowClear
                    placeholder="Please select"
                    style={{ width: '100%' }}
                    value={searchPriority}
                    onChange={handleSearchPriority}
                >
                    <Select.Option value="High" label="High">
                        <Tag color="red">High</Tag>
                    </Select.Option>
                    <Select.Option value="Medium" label="Medium">
                        <Tag color="blue">Medium</Tag>
                    </Select.Option>
                    <Select.Option value="Low" label="Low">
                        <Tag color="gray">Low</Tag>
                    </Select.Option>
                </Select>
            </Col> */}
        </Row>
    );
}

export default Filters;

