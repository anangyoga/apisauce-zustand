import React from "react";

const Card = ({ item }) => {
  return (
    <div className="border rounded-lg max-w-md shadow-md p-4">
      <img src={item.image} alt="" />
      <p>{item.name}</p>
    </div>
  );
};

export default Card;
