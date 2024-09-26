import React from "react";

export default function ItemCart({ item, index }) {
  console.log(item);
  return (
    <>
      <tr>
        <th scope="row">{index + 1}</th>
        <td>{item.name}</td>
        <td>{item.price * item.quantity} USD</td>
        <td>
          <input
            name="cart-item-quantity-1"
            type="number"
            value={item.quantity}
          />
        </td>
        <td>
          <a className="label label-info update-cart-item" data-product="">
            Update
          </a>
          <a className="label label-danger delete-cart-item" data-product="">
            Delete
          </a>
        </td>
      </tr>
    </>
  );
}
