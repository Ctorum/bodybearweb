import React from "react";

import "./styles.css";

function Product({ img, alt, title, value, description, realValue }) {
  return (
    <div className="product-container">
      <img src={img} alt={alt} className="image" />
      <div>
        <p className="title">{title}</p>
        <p className="real-value">R$ {realValue}</p>
        <p className="description">{description}</p>
        <p className="value">{value}</p>
      </div>
    </div>
  );
}

export default Product;
