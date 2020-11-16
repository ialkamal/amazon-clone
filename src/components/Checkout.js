import React from "react";
import { useStateValue } from "../contexts/StateContext";

function Checkout() {
  const [{ basket, total }, dispatch] = useStateValue();

  const removeItem = (product) => {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: product });
  };

  return (
    <div>
      <div>
        <p>Total: AED {total}</p>
      </div>
      {basket.map((item) => (
        <div key={item.id} className="product">
          <div className="product__info">
            <p>{item.title}</p>
            <p className="product__price">
              <small>AED </small>
              <strong>{item.price}</strong>
            </p>
            <div className="product__rating">
              {Array(Math.floor(item.rating))
                .fill()
                .map((_, i) => (
                  <p key={i}>⭐</p>
                ))}
            </div>
          </div>
          <img src={item.image} alt="" />
          <button onClick={() => removeItem(item)}>Remove from basket</button>
        </div>
      ))}
    </div>
  );
}

export default Checkout;
