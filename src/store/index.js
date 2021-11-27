import { createStore } from "redux";
import { rootDivMagicReducer } from "./reducers";

const store = createStore(
  rootDivMagicReducer
);

export default store;
