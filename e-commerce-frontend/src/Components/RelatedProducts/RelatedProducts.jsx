import React from "react";
import "./RelatedProducts.css";
import Item from "../Item/Item";
import data_product from "../Assets/all_product";

const RelatedProducts = (props) => {
  // console.log(props.product)
  console.log(data_product);
  return (
    <div className="relatedproducts">
      <h1>More Products</h1>
      <hr className="hrr" />
      <div className="relatedproducts-item">
        {data_product
          .slice(0, 4) 
          .map((item) => {
            return (
              <Item
                key={item.id}
                id = {item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          })}
      </div>
    </div>
  );
};

export default RelatedProducts;
