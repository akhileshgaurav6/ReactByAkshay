import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
//   console.log(data);

// const [showItems, setShowItems] = useState(false);

const handleClick = () => {
  // setShowItems(!showItems)
  setShowIndex();
  
}

  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-6 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title} ({data.categories[0].itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        {showItems && <ItemList items={data.categories[0].itemCards} dummy={dummy} />}
      </div>
      {/* Accoridan Body */}
    </div>
  );
};

export default RestaurantCategory;
