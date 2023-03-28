import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";
import Cart from "../Cart/Cart";
import Swal from "sweetalert2";

const Shop = () => {
  const [ornaments, setOrnaments] = useState([]);
  const [carts, setCarts] = useState([]);
  const [selected, setSelected] = useState({});

  const handleAddToCart = (product) => {
    if (carts.length > 3) {
      Swal.fire({
        title: "Sorry you can't collect more than 4 ornaments!",
        icon: "warning",
        dangerMode: true,
      });
      return;
    } else if (carts.find((c) => c.id === product.id)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Same ornament not added!",
      });
    } else {
      const newCart = [...carts, product];
      setCarts(newCart);
    }
  };
  const handleDelete = (id) => {
    setCarts(carts.filter((c) => c.id !== id));
  };

  useEffect(() => {
    fetch("fakedb.json")
      .then((res) => res.json())
      .then((data) => setOrnaments(data));
  }, []);

  const chooseProduct = () => {
    const chosen = Math.floor(Math.random() * carts.length);
    setSelected(carts[chosen]);
  };

  return (
    <div className="shop-container">
      <div className="pd-container">
        {ornaments.map((pd) => (
          <Product
            key={pd.id}
            pd={pd}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <div>
          <h4 style={{ padding: "20px" }}>Selected ornaments:</h4>
          {carts.slice(0, 4).map((cart) => (
            <Cart
              key={cart.id}
              cart={cart}
              handleDelete={handleDelete}
              // carts={carts}
              // setCarts={setCarts}
            ></Cart>
          ))}
          <div className="choose-btn">
            <button onClick={chooseProduct} style={{ marginBottom: "10px" }}>
              Choose one for me
            </button>
            <br />
            <button
              onClick={() => {
                setCarts([]);
                setSelected({});
              }}
            >
              Choose again
            </button>
          </div>
        </div>

        {selected?.id && (
          <div className="justOne">
            <img src={selected?.img} alt="" />
            <div className="product-info">
              <h4 style={{ padding: "10px 0 10px 0" }}>{selected?.name}</h4>
              <p>{selected?.service}</p>
              <p>Price : ${selected?.price}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
