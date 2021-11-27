import uuid from 'uuid'

export const EMBED_DIVS = "EMBED_DIV";

export const embedDivs = (payload) => ({
  type: EMBED_DIVS,
  payload: {
    parentId: payload.parentId,
    div1: {
      id: uuid.v1(),
      color: payload.div1color
    },
    div2: {
      id: uuid.v1(),
      color: payload.div2color
    },
  },
});
