import React, { Fragment } from "react";
import Search from "../shows/Search";
import ShowItem from "../shows/ShowItem";

function Home() {
  return (
    <Fragment>
      <Search />
      <ShowItem />
    </Fragment>
  );
}

export default Home;
