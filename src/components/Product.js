import React from "react";
import "./Product.css";
import { useStateValue } from "../contexts/StateContext";

function Product({ product }) {
  const { title, image, price, rating } = product;

  const [{ basket }, dispatch] = useStateValue();

  const addItem = () => {
    dispatch({ type: "ADD_TO_BASKET", payload: product });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>AED </small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(Math.floor(rating))
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addItem}>Add to basket</button>
    </div>
  );
}

export default Product;
