import React from "react";
import Header from "../../component/Header";
import ListProduct from "../../component/ListProduct";
import ListCart from "../../component/ListCart";

export default function LayoutCart() {
  return (
    <>
      <div className="container">
        {/* header */}
        <Header />
        <div className="row">
          <div>
            {/* list product */}
            <ListProduct />
          </div>
          <div>
            {/* list cart */}
            <ListCart />
          </div>
        </div>
      </div>
    </>
  );
}
