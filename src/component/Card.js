import React from "react";

const Card = (props) => {
  return (
    <div className="border rounded-lg max-w-md shadow-md p-4">
      <p>{props.name}</p>
    </div>
  );
};

export default Card;
