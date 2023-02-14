import { useState } from "react";
import {
  Button,
  Container,
  InputGroup,
  Form,
  Col,
  ListGroup,
} from "react-bootstrap";
import { add } from "./features/todoSlice";
import { useAppDispatch, useAppSelector } from "./store";

const App = () => {
  const todos = useAppSelector((state) => state.todos);
  const [title, setTitle] = useState("");

  const dispatch = useAppDispatch();
  const onSave = () => {
    dispatch(add(title));
    setTitle("");
  };

  return (
    <Container className="mt-3">
      <h1>Todo App</h1>
      <Col md={6}>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="enter todo"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          />
          <Button variant="outline-secondary" onClick={onSave}>
            add
          </Button>
        </InputGroup>

        <ListGroup>
          {todos.map((todo: any) => (
            <>
              <ListGroup.Item className="d-flex justify-content-between">
                {todo.title}{" "}
                <Button variant="danger" className="btn-sm">
                  X
                </Button>
              </ListGroup.Item>
            </>
          ))}
        </ListGroup>
      </Col>
    </Container>
  );
};

export default App;
