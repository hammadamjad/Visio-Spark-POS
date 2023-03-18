import React from "react";

const OrderProduct = ({product}) => {
  return (
    <div className="row mt-3">
      <div className="col-10">
        <div className="row">
          <div className="col-3">
            <img src="./product-1.svg" alt="" width={'50'} />
          </div>
          <div className="col-6">
            <div className="body-normal-medium text-start white">{product.name}</div>
            <div className="body-small-medium white">${product.price}</div>
          </div>
          <div className="col-3">
            <div className="p-2 dark-bg-1 rounded white">{product.quantity}</div>
          </div>
        </div>
      </div>
      <div className="col-2">
        <div className="row">
          <div className="col-12 white">$2.32</div>
          <div className="col-12 white">Delete</div>
        </div>
      </div>
    </div>
  );
};

export default OrderProduct;
