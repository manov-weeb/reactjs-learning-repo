import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/CartSlice";

const Cart = () => {
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Cart</h3>
      <div className="cart-wrapper">
        {items.map((product) => (
          <div className="cart-card" key={product.id}>
            <img src={product.image} alt="product" />
            <h5>{product.title}</h5>
            <h5>{product.price}</h5>
            <button onClick={() => handleRemove(product.id)} className="btn">
              {" "}
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
