import React from "react";
import { useStateValue } from "../contexts/StateContext";
import Subtotal from "./Subtotal";
import "./Checkout.css";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  const removeItem = (product) => {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: product });
  };

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/media/images/banner-ads-examples-disney%2B.jpg?so0uQt68ZOFb5FN0rSzSWtfGinew87_K&itok=kJxsCgPs"
          alt=""
        />

        {basket.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is empty</h2>
          </div>
        ) : (
          <div className="checkout__title">
            <h2>Your Shopping Basket</h2>
          </div>
        )}
        {basket.map((item) => (
          <div key={item.id} className="checkoutProduct">
            <img className="checkoutProduct__image" src={item.image} alt="" />
            <div className="checkoutProduct__info">
              <p className="checkoutProduct__title">{item.title}</p>
              <p className="checkoutProduct__price">
                <small>AED </small>
                <strong>{item.price}</strong>
              </p>
              <div className="checkoutProduct__rating">
                {Array(Math.floor(item.rating))
                  .fill()
                  .map((_, i) => (
                    <p key={i}>⭐</p>
                  ))}
              </div>
              <button onClick={() => removeItem(item)}>
                Remove from basket
              </button>
            </div>
          </div>
        ))}
      </div>
      {basket.length ? (
        <div className="checkout__right">
          <Subtotal />
        </div>
      ) : (
        <div>
          <p>You still don't have any items in your basket.</p>
        </div>
      )}
    </div>
  );
}

export default Checkout;
