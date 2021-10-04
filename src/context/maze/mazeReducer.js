import { SEARCH_SHOWS } from "./types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_SHOWS:
      return {
        ...state,
        shows: action.payload,
      };
    default:
      return state;
  }
};
