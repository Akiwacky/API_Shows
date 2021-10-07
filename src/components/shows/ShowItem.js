import React, { useContext } from "react";
import mazeContext from "../../context/maze/mazeContext";
import { Link } from "react-router-dom";

const ShowItem = () => {
  const mContext = useContext(mazeContext);

  const { shows } = mContext;

  return (
    <div className=" mt-2 bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {shows.map((item) => (
            <div key={item.show.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <Link to={`/show/${item.show.name}/${item.show.id}`}>
                  <img
                    src={
                      item.show.image !== null
                        ? item.show.image.medium
                        : "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                    }
                    alt={item.show.name}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </Link>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">{item.show.name}</h3>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {item.show.rating.average !== null
                    ? item.show.rating.average
                    : "N/A"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowItem;
