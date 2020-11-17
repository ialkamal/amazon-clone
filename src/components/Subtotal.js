import React from "react";
import { useStateValue } from "../contexts/StateContext";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";

function Subtotal() {
  const [{ basket, total }] = useStateValue();

  return (
    <div className="subtotal">
      <div className="subtotal__price">
        <CurrencyFormat
          renderText={(value) => {
            return (
              <>
                <p>
                  Subtotal ({basket.length} items): <strong>{value}</strong>
                </p>
                <small className="subtotal__gift">
                  <input type="checkbox" /> This order contains a gift
                </small>
              </>
            );
          }}
          decimalScale={2}
          value={total}
          displayType="text"
          thousandSeparator={true}
          prefix={"AED "}
        />
      </div>
      <button className="subtotal__button">Procced to Checkout</button>
    </div>
  );
}

export default Subtotal;
