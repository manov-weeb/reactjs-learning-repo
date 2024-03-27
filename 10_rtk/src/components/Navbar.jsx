import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => {
    return state.cart;
  });
  console.log(items);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "space-between",
        justifyContent: "center",
      }}
    >
      <span className="logo">REDUX STORE</span>
      <div>
        <Link className="nav-link" to={"/"}>
          Home
        </Link>
        <Link className="nav-link" to={"/cart"}>
          Cart
        </Link>
        <span className="cart-count">Cart Items: {items.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
