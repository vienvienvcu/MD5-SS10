import React from "react";
import { useSelector } from "react-redux";

export default function TotalCart() {
  const items = useSelector((state) => state.carts.items); // Lấy danh sách sản phẩm từ Redux

  // Tính tổng số lượng và tổng giá
  const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <tfoot id="my-cart-footer">
      <tr>
        <td colSpan={4}>
          There are <b>{totalQuantity}</b> items in your shopping cart.
        </td>
        <td colSpan={2} className="total-price text-left">
          {totalPrice} USD
        </td>
      </tr>
    </tfoot>
  );
}
