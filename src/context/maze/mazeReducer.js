import { FETCH_SHOW, SEARCH_SHOWS, SET_LOADING, CLEAR_SHOWS } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_SHOWS:
      return {
        ...state,
        shows: action.payload,
        loading: false,
      };
    case FETCH_SHOW:
      return {
        ...state,
        show: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CLEAR_SHOWS:
      return {
        ...state,
        shows: [],
      };
    default:
      return state;
  }
};
