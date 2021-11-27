import uuid from "uuid";
import { EMBED_DIVS } from "./actions";

const initState = {
  div: {
    id: uuid.v1(),
    children: [],
  },
  isInit: true,
};

export const rootDivMagicReducer = (state = initState, action) => {
  switch (action.type) {
    case EMBED_DIVS:
      const findObj = (div, payload) => {
        if (div.id === payload.parentId) {
          return div;
        }
        if (!div.children || div.children.length === 0) {
          return;
        }
        let children = div.children;
        for (let i = 0; i < children.length; i++) {
          const obj = findObj(children[i], payload);
          if (obj) {
            return obj;
          }
        }
      };

      const newState = { ...state, isInit: false };
      const obj = findObj(newState.div, action.payload);

      if (obj) {
        obj.children = [action.payload.div1, action.payload.div2];
      }

      console.log("DEBUG newState", newState);

      return newState;
    default:
      return state;
  }
};
