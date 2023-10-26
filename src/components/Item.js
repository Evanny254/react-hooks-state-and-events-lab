import React, { useState } from "react"; 

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false); 
  function toggleCartStatus() {
    setInCart((prevInCart) => !prevInCart);
  }
  const buttonClass = inCart ? "remove" : "add";
  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={toggleCartStatus}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
