import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function ItemProduct({ product }) {
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleAddToCart = () => {
    dispatch({
      type: "add",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity,
      },
    });
  };

  return (
    <>
      <div>
        <div className="media product">
          <div className="media-left">
            <a href="#">
              <img className="media-object" src={product.image} alt="pizza" />
            </a>
          </div>
          <div className="media-body">
            <h4 className="media-heading">{product.name}</h4>
            <p>{product.description}</p>

            {product.quantity > 0 ? (
              <div className="control">
                <span className="price" style={{ background: "blue" }}>
                  {product.price}
                </span>
                <div className="control">
                  <input
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}
                    min="1"
                    max={product.quantity}
                  />
                </div>
                <button onClick={handleAddToCart}>Add to Cart</button>
              </div>
            ) : (
              <span className="price">{product.price}</span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
