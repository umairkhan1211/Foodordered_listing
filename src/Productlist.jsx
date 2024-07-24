import React from "react";

function Productlist(props) {
  const { food_img, food_name, food_prize, quantity, onAdd, onRemove } = props;

  return (
    <>
      <div className="selected_product">
        <div className="top">
          <h1 className="a3">{food_name}</h1>
          <img src={food_img}  />
        </div>
        <div className="lower">
          <h1 className="a4">{food_prize}</h1>
          <h2 className="a4">Quantity: {quantity}</h2>
        </div>
        <div className="btn">
          <button className="btn2" onClick={onAdd}>Add</button>
          <button className="btn2" onClick={onRemove}>Remove</button>
          
        </div>
      </div>
    </>
  );
}

export default Productlist;
