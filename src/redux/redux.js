import { createStore } from "redux";

const reducerfn = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "INC": {
      return { counter: state.counter + 1 };
    }
    case "DEC": {
      return { counter: state.counter - 1 };
    }
    case "ADD": {
      return { counter: state.counter + action.payload };
    }
    default: {
      break;
    }
  }
  return state;
};

export const stores = createStore(reducerfn);
