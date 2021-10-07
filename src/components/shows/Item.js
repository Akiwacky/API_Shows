import React, { useEffect, useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import mazeContext from "../../context/maze/mazeContext";
import Spinner from "../Spinner";

const Item = ({ match }) => {
  const mContext = useContext(mazeContext);
  const { fetchShow, show, loading } = mContext;

  useEffect(() => {
    fetchShow(match.params.name, match.params.id);
  });

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <Fragment>
            <Link to="/">
              <button
                type="button"
                className=" mb-3 inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Back To Search
              </button>
            </Link>
          </Fragment>

          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
            <img
              src={
                show.image !== null && show.image !== undefined
                  ? show.image.original
                  : "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
              }
              alt=""
            />

            {/* Product info */}
            <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                {show.name}
              </h1>

              <div className="mt-3">
                <h2 className="sr-only">Show information</h2>
                <p className="text-3xl text-gray-900">
                  {show.rating !== null && show.rating !== undefined
                    ? show.rating.average
                    : "Rating Undetermined"}
                </p>
              </div>

              <div className="mt-6">
                <h3 className="sr-only">Description</h3>

                <div className="text-base text-gray-700 space-y-6">
                  <p>
                    {show.summary !== null && show.summary !== undefined
                      ? show.summary
                          .replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, "")
                          .replace(/&#[0-9]+;t/gi, "")
                          .replace(/\[/g, "")
                          .replace(/\]/g, "")
                      : "N/A"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Item;
