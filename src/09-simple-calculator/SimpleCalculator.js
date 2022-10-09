import { useReducer } from "react";

const initialState = {
  number1: 0,
  number2: 0,
  result: "No result yet!",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_FIRST_NUMBER":
      return { ...state, number1: action.number };
    case "SET_SECOND_NUMBER":
      return { ...state, number2: action.number };
    case "ADD":
      return { ...state, result: state.number1 + state.number2 };
    case "SUBTRACT":
      return { ...state, result: state.number1 - state.number2 };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

export default function SimpleCalculator() {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>
        <h2>Number 1</h2>
        {numbers.map((number) => (
          <button
            key={number}
            onClick={() => dispatch({ type: "SET_FIRST_NUMBER", number })}
          >
            {number}
          </button>
        ))}
      </div>
      <div>
        <h2>Number 2</h2>
        {numbers.map((number) => (
          <button
            key={number}
            onClick={() => dispatch({ type: "SET_SECOND_NUMBER", number })}
          >
            {number}
          </button>
        ))}
      </div>
      <div>
        <h2>Actions</h2>
        <button onClick={() => dispatch({ type: "ADD" })}>+</button>
        <button onClick={() => dispatch({ type: "SUBTRACT" })}>-</button>
        <button onClick={() => dispatch({ type: "RESET" })}>c</button>
      </div>
      <div>
        <h2>Result: {state.result}</h2>
      </div>
    </div>
  );
}
