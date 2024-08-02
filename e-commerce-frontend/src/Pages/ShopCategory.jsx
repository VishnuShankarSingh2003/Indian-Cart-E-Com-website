import React, { useEffect, useState } from "react";
import "./CSS/ShopCategory.css";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";
import { Link } from "react-router-dom";

const ShopCategory = (props) => {
  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = () => {
    fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .catch((error) => {
        console.log(error);
      })
      .then((data) => setAllProducts(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="shopcategory">
      <img src={props.banner} className="shopcategory-banner" alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1 - 6</span> out of{" "}
          {allproducts ? allproducts.length : "loading..."} Products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {allproducts &&
          allproducts.map((item, i) => {
            if (props.category === item.category) {
              return (
                <Item
                  id={item.id}
                  key={i}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            } else {
              return null;
            }
          })}
      </div>
      <div className="shopcategory-loadmore">
        <Link to="/" style={{ textDecoration: "none" }}>
          <button className="button">
            <span className="button-content">Explore More</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ShopCategory;
