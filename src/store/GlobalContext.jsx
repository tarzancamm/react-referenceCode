import { createContext, useReducer } from "react";

// React updates this state in the background when we pass values through the reducer. State becomes initalState + new state values added.
const initialState = {
  name: "Cameron",
  count: 0,
  list: [],
};

//Should be named something that's relavent to what the context is used for
const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "CHANGENAME":
        return { ...state, name: action.payload };
    case "INCREASE":
        return { ...state, count: state.count + 5}
    case "DECREASE":
        return { ...state, count: state.count - 1}
    case "ADDTOLIST":
        const newList = [...state.list, action.payload]
        return { ...state, list: newList}
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
export { GlobalContextProvider };
