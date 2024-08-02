import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [cart, setCart]=useState(false);
  function handleCartItems(){
    setCart(currentState=>!currentState);
  }
 const liClass=cart?"in-cart":"";
  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCartItems}>{cart?"Remove From Cart":"Add to Cart"}</button>
    </li>
  );
}

export default Item;
