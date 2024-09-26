import React from "react";
import ItemCart from "./ItemCart";
import TotalCart from "./TotalCart";
import Notification from "./Notification";
import { useSelector } from "react-redux";

export default function ListCart() {
  const items = useSelector((state) => state.carts.items);
  console.log(items);

  return (
    <>
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-danger">
          <div className="panel-heading">
            <h1 className="panel-title">Your Cart</h1>
          </div>
          <div className="panel-body">
            <table className="table">
              <thead>
                <tr>
                  <th width="4%">STT</th>
                  <th>Name</th>
                  <th width="15%">Price</th>
                  <th width="4%">Quantity</th>
                  <th width="25%">Action</th>
                </tr>
              </thead>
              <tbody id="my-cart-body">
                {items.map((item, index) => (
                  <ItemCart key={item.id} item={item} index={index} />
                ))}
              </tbody>
              <TotalCart />
            </table>
          </div>
        </div>
        <Notification />
      </div>
    </>
  );
}
