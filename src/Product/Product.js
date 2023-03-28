import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import "./Product.css";

const Product = (pd) => {
  const { handleAddToCart } = pd;
  const { img, name, price } = pd.pd;
  console.log(pd.pd);
  return (
    <div
      className="cart"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <Card
        style={{
          width: "18rem",
          height: "110%",
          boxShadow: "4px 7px 5px 0px rgba(0,0,0,0.2)",
          webkitBoxShadow: "4px 7px 5px 0px rgba(0,0,0,0.2)",
          mozBoxShadow: "4px 7px 5px 0px rgba(0,0,0,0.2)",
        }}
      >
        <Card.Img variant="top" src={img} />
        <Card.Body className="cart-info">
          <Card.Title
            style={{
              color: "palevioletred",
            }}
          >
            {name}
          </Card.Title>
          <Card.Text
            style={{
              color: "palevioletred",
            }}
          >
            ${price}
          </Card.Text>
          <Button
            onClick={() => handleAddToCart(pd.pd)}
            style={{
              backgroundColor: "black",
              color: "palevioletred",
              border: "1px solid palevioletred",
              borderRadius: "10xpx",
            }}
            className="btn-cart"
          >
            Add to cart <MdOutlineAddShoppingCart size={18} />
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
