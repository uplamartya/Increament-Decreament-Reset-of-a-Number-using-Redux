import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import MyApp from "./src/MyApp";

const initState = {
  myCounter: 0
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "INC_COUNTER":
      return { myCounter: state.myCounter + 1 };
    case "RESET":
      return { myCounter: 0 };
    case "DEC_COUNTER":
      if (state.myCounter >= 1) {
        return { myCounter: state.myCounter - 1 };
      } else {
        return state;
      }
  }
  return state;
};
const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MyApp />
      </Provider>
    );
  }
}
