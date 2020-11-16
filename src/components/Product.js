import React from "react";
import "./Product.css";

function Product({ product }) {
  const { id, title, image, price, rating } = product;
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
      <button>Add to basket</button>
    </div>
  );
}

export default Product;
