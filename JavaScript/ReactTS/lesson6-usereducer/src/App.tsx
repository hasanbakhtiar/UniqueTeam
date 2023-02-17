import { useReducer } from "react";
import { Button, Container } from "react-bootstrap";

interface CounterState {
  count: number;
}

interface ResetAction {
    type:'reset'
}

interface UpdateAction {
    type:'increment' | 'decrement',
    payload:number
}

type CounterAction = UpdateAction | ResetAction;

const initialState = { count: 0 };

const CounterReducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    
      case "decrement":
      return { count: state.count - (state.count > 0 ? action.payload : 0) };
        case 'reset':
            return initialState;

    default:
      return { count: state.count };
  }
};

const App: React.FC = () => {
  const [state, dispatch] = useReducer(CounterReducer, initialState);
  return (
    <Container className="mt-5">
      <Button variant="danger"   onClick={() => dispatch({ type: "decrement", payload: 1  })}>-1</Button>
      <span className="mx-3">{state.count}</span>
      <Button
        variant="success"
        onClick={() => dispatch({ type: "increment", payload: 1 })}
      >
        +1
      </Button>
      <Button variant="warning" className="ms-4" onClick={()=>dispatch({type:'reset'})}>reset</Button>
    </Container>
  );
};

export default App;
