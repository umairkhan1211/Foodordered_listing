import React from 'react'

function Product_name(props) {
  const { food_name, food_img, food_prize, onClick } = props;

  return (
    <>
      <div className="food" onClick={onClick}>
        <div className="food_items">
          <div className="right_item">
            <h1 className="a1">{food_name}</h1>
            <img src={food_img} alt={food_name} />
          </div>
          <div className="left_item">
            <button className="a2">
              {food_prize}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product_name;
