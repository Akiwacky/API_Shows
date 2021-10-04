import React, { useReducer } from "react";
import axios from "axios";
import mazeContext from "./mazeContext";
import mazeReducer from "./mazeReducer";
import { SEARCH_SHOWS } from "./types";

const MazeState = (props) => {
  const initialState = {
    shows: [],
  };

  const [state, dispatch] = useReducer(mazeReducer, initialState);

  // SEARCH SHOWS
  const searchShows = async (text) => {
    const res = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${text}`
    );

    dispatch({ type: SEARCH_SHOWS, payload: res.data });
  };

  return (
    <mazeContext.Provider
      value={{
        shows: state.shows,
        searchShows,
      }}
    >
      {props.children}
    </mazeContext.Provider>
  );
};

export default MazeState;
