import React, { useReducer } from "react";
import axios from "axios";
import mazeContext from "./mazeContext";
import mazeReducer from "./mazeReducer";
import { SEARCH_SHOWS, FETCH_SHOW, SET_LOADING, CLEAR_SHOWS } from "../types";

const MazeState = (props) => {
  const initialState = {
    shows: [],
    show: {},
    SET_LOADING: false,
  };

  const [state, dispatch] = useReducer(mazeReducer, initialState);

  // SEARCH SHOWS
  const searchShows = async (text) => {
    setLoading();

    const res = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${text}`
    );

    dispatch({ type: SEARCH_SHOWS, payload: res.data });
  };

  // FETCH SINGLE SHOW
  const fetchShow = async (show, id) => {
    setLoading();

    const res = await axios.get(
      `https://api.tvmaze.com/singlesearch/shows?q=${show}&id=${id}`
    );

    dispatch({ type: FETCH_SHOW, payload: res.data });
  };

  const clearShows = () => dispatch({ type: CLEAR_SHOWS });

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <mazeContext.Provider
      value={{
        shows: state.shows,
        show: state.show,
        searchShows,
        fetchShow,
        setLoading,
        clearShows,
      }}
    >
      {props.children}
    </mazeContext.Provider>
  );
};

export default MazeState;
