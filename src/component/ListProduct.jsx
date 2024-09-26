import React from "react";
import ItemProduct from "./ItemProduct";
import { useSelector } from "react-redux";

export default function ListProduct() {
  const { products } = useSelector((state) => state);
  console.log(products);
  return (
    <>
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h1 className="panel-title">List Products</h1>
          </div>
          <div className="panel-body" id="list-product">
            {products.map((product) => (
              <ItemProduct product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
