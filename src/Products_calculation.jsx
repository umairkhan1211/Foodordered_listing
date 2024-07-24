import React from "react";

function Products_calculation({ submittedFoods }) {
 

  return (
    <>
      <div className="calculation">
        {submittedFoods.map((item, index) => (
          <div key={index} className="submitted_product">
            <img src={item.img} />
            <h3 className="h3">{item.name.length > 6 ? item.name.slice(0, 6) + '...' : item.name}</h3>
            <p className="p1">Qty: {item.quantity}</p>
            <p className="p2">Price: {item.prize * item.quantity} Rs</p>
          </div>
        ))}
        
      </div>
    </>
  );
}

export default Products_calculation;

