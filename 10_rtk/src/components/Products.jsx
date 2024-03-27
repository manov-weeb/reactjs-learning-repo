import React, { useState, useEffect } from "react";
import { add } from "../store/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/ProductsSlice";
import { STATUSES } from "../store/ProductsSlice";

const Products = () => {
  const { data: products, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    //     const fetchProducts = async () => {
    //       const response = await fetch("https://fakestoreapi.com/products");
    //       const data = await response.json();

    //       console.log(data);
    //       setProducts(data);
    //     };

    //     fetchProducts();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };
  if (status === STATUSES.LOADING) {
    return <h2>Loading...</h2>;
  }
  if (status === STATUSES.ERROR) return <h2> Some Error Occured!</h2>;

  return (
    <div className="products-wrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="product" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button onClick={() => handleAdd(product)} className="btn">
            {" "}
            Add To Cart{" "}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
