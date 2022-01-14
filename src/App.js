import { useReducer } from "react";
import "./styles.css";

import rootReducer from "./reducers/index";
import { SELL_MEAT, SELL_VEGETABLE } from "./reducers/actionTypes";

export default function App() {
  const initialState = {
    reducerMeat: { numOfMeat: 30 },
    reducerVegetable: { numOfVegetable: 25 }
  };
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <div className="App">
      <button onClick={() => dispatch({ type: SELL_MEAT })}>Sell Meat</button>
      Today's Meat: {state.reducerMeat.numOfMeat}
      <br />
      <button onClick={() => dispatch({ type: SELL_VEGETABLE })}>
        Sell Vegetable
      </button>
      Today's Vegetabel: {state.reducerVegetable.numOfVegetable}
    </div>
  );
}
