import React from "react";
import { AiFillDelete } from "react-icons/ai";
import "./Cart.css";

const Cart = (props) => {
  const { handleDelete } = props;
  // const { carts, setCarts } = props;
  const { id, img, name } = props.cart;

  return (
    <div>
      <div className="selected-item">
        <img src={img} alt="" />
        <h6>{name}</h6>
        <button onClick={() => handleDelete(id)} className="delete-btn">
          {" "}
          <AiFillDelete size={"25px"} />
        </button>
      </div>
    </div>
  );
};

export default Cart;
