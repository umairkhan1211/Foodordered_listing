import React, { useState } from "react";
import Product_name from "./Product_name";
import Productlist from "./Productlist";
import Products_calculation from "./Products_calculation";

function App() {
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [submittedFoods, setSubmittedFoods] = useState([]);

  const food = [
    {
      name: "Burger",
      img: "https://images.unsplash.com/photo-1542574271-7f3b92e6c821?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      prize: 500,
    },
    {
      name: "Pizza",
      img: "https://media.istockphoto.com/id/686727114/photo/pizza-pepperoni-mozzarella-oregano.webp?b=1&s=170667a&w=0&k=20&c=quK9tayZy-2BwdbJdz1mRxJiJQEmOB6cbk7BEEzGGy0=",
      prize: 750,
    },
    {
      name: "Fries",
      img: "https://media.istockphoto.com/id/1402860995/photo/pile-of-delicious-fried-potatoes-with-salt-against-black-background.jpg?s=612x612&w=0&k=20&c=UpMyVlhPv9Lrd1SllYoAGPyyCCPGL_4TyLDHCrUszKM=",
      prize: 200,
    },
    {
      name: "Roll Paratha",
      img: "https://media.istockphoto.com/id/1444526719/photo/chicken-black-pepper-paratha-roll-kathi-shawarma-wrap-with-dipping-sauce-isolated-on.jpg?s=612x612&w=0&k=20&c=zeqorumqCHS6wDUN0iogd-fUlxLqUtrpcmzs5Hxb5RA=",
      prize: 450,
    },
    {
      name: "Soft Drink",
      img: "https://media.istockphoto.com/id/181896325/photo/sparkling-water.jpg?s=612x612&w=0&k=20&c=xeF35dmGBAocYOPrABvfz0wMnlHniyqwO5K5rflQqKg=",
      prize: 120,
    },
  ];

  const handleFoodClick = (foodItem) => {
    const existingFoodIndex = selectedFoods.findIndex(
      (item) => item.name === foodItem.name
    );

    if (existingFoodIndex >= 0) {
      const updatedFoods = [...selectedFoods];
      updatedFoods[existingFoodIndex].quantity += 1;
      setSelectedFoods(updatedFoods);
    } else {
      setSelectedFoods([...selectedFoods, { ...foodItem, quantity: 1 }]);
    }
  };

  const handleAdd = (foodName) => {
    const updatedFoods = selectedFoods.map((item) =>
      item.name === foodName ? { ...item, quantity: item.quantity + 1 } : item
    );
    setSelectedFoods(updatedFoods);
  };

  const handleRemove = (foodName) => {
    const updatedFoods = selectedFoods
      .map((item) =>
        item.name === foodName ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);
    setSelectedFoods(updatedFoods);
  };

 

  const handleSubmit = () => {
    setSubmittedFoods(selectedFoods);
  };

  const totalPrice = submittedFoods.reduce((total, item) => {
    return total + item.prize * item.quantity;
  }, 0);

  return (
    <>
      <div className="main">
        <div className="logo">
          <img
            src="https://em-cdn.eatmubarak.pk/54946/logo/1649325481.png"
            alt=""
          />
        </div>
        <div className="box1">
          <div className="product_names">
            <div className="heading">
              <h1>Food</h1>
            </div>
            {food.map((item, index) => (
              <Product_name
                key={index}
                food_name={item.name}
                food_img={item.img}
                food_prize={`${item.prize} Rs`}
                onClick={() => handleFoodClick(item)}
              />
            ))}
          </div>
        </div>
        <div className="box2">
          <div className="header">
            <div className="heading">
              <h1>Ordered Food</h1>
            </div>
          </div>
          {selectedFoods.length > 0 &&
            selectedFoods.map((item, index) => (
              <Productlist
                key={index}
                food_name={item.name}
                food_img={item.img}
                food_prize={`${item.prize} Rs`}
                quantity={item.quantity}
                onAdd={() => handleAdd(item.name)}
                onRemove={() => handleRemove(item.name)}
                
              />
            ))}
          <button className="btn1" onClick={handleSubmit}>
            Submit
          </button>
        </div>

        <div className="box3">
          <div className="heading">
            <h1>Total</h1>
          </div>
          <Products_calculation submittedFoods={submittedFoods} />
          <h2 className="h2">Total Price: {totalPrice} Rs</h2>
        </div>
      </div>
    </>
  );
}

export default App;

