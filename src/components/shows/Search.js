import React, { useState, useContext } from "react";
import mazeContext from "../../context/maze/mazeContext";
import alertContext from "../../context/alert/alertContext";

const Search = () => {
  const mContext = useContext(mazeContext);
  const aContext = useContext(alertContext);
  const [text, setText] = useState(" ");

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === " ") {
      aContext.setAlert("Please Enter Something");
    } else {
      mContext.searchShows(text);
      setText(" ");
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div className="mt-5 space-y-8 divide-y divide-gray-200">
      <form onSubmit={onSubmit}>
        <label htmlFor="text" className="sr-only">
          Search
        </label>
        <input
          type="text"
          name="search"
          value={text}
          onChange={onChange}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="Search..."
        />

        <input
          type="submit"
          value="Search"
          className="mt-3 py-2 px-4 block w-full border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        />
      </form>

      {mContext.shows.length > 0 && (
        <button
          className="py-2 px-4 block w-full border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          onClick={mContext.clearShows}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
