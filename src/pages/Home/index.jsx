import React, { useEffect, useState } from "react";
import SideBar from "../../components/Navbar";
import OrderProduct from "../../components/OrderProduct";
import Product from "../../components/Product";
import styles from "./style.module.css";

const products = [
  {
    id: 1,
    imageUrl: "./product-1.svg",
    name: "Product 1",
    price: 2.99,
    quantity: 2,
    category: "category 1",
  },
  {
    id: 1,
    imageUrl: "./product-1.svg",
    name: "Product 1",
    price: 2.99,
    quantity: 2,
    category: "category 1",
  },
  {
    id: 1,
    imageUrl: "./product-1.svg",
    name: "Product 1",
    price: 2.99,
    quantity: 2,
    category: "category 1",
  },
  {
    id: 1,
    imageUrl: "./product-1.svg",
    name: "Product 1",
    price: 2.99,
    quantity: 2,
    category: "category 1",
  },
  {
    id: 1,
    imageUrl: "./product-1.svg",
    name: "Product 1",
    price: 2.99,
    quantity: 2,
    category: "category 1",
  },
  {
    id: 1,
    imageUrl: "./product-1.svg",
    name: "Product 1",
    price: 2.99,
    quantity: 2,
    category: "category 1",
  },
  {
    id: 1,
    imageUrl: "./product-1.svg",
    name: "Product 1",
    price: 2.99,
    quantity: 2,
    category: "category 1",
  },
  {
    id: 1,
    imageUrl: "./product-1.svg",
    name: "Product 1",
    price: 2.99,
    quantity: 2,
    category: "category 2",
  },
  {
    id: 1,
    imageUrl: "./product-1.svg",
    name: "Product 1",
    price: 2.99,
    quantity: 2,
    category: "category 1",
  },
  {
    id: 1,
    imageUrl: "./product-1.svg",
    name: "Product 1",
    price: 2.99,
    quantity: 2,
    category: "category 3",
  },
  {
    id: 1,
    imageUrl: "./product-1.svg",
    name: "Product 1",
    price: 2.99,
    quantity: 2,
    category: "category 3",
  },
];

// const orders = [
//   {
//     id: 1,
//     imageUrl: "./product-1.svg",
//     name: "Product 1",
//     price: 2.99,
//     quantity: 2,
//     category: "category 1",
//   },
//   {
//     id: 1,
//     imageUrl: "./product-1.svg",
//     name: "Product 1",
//     price: 2.99,
//     quantity: 2,
//     category: "category 1",
//   },
// ]

const categories = new Array(
  ...new Set(products.map((product) => product.category))
);

const Home = () => {
  const [orders, setOrders] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();

  const handleAddToCart = (product) => {

    setOrders([...orders, product]);

  };

  const [total, setTotal] = useState(0)

  useEffect(() => {
    let counter = 0;
    const temp = orders.forEach(item => {
      counter += item.price;
    })
    setTotal(counter)

  }, [orders]);

  return (
    <div className="d-flex" style={{
      height: '100vh'
    }}>
      <SideBar />
      <div className={`${styles.container} dark-bg-1 p-5 col-8`}>
        <div className="row">
          <div className="col-8">
            <div className="h1 white">Muneeb Ahmed</div>
            <div className="body-large-regular text-lighter">
              Tuesday, 2 Feb 2022
            </div>
          </div>
        </div>
        <div className="row mt-3">
          {categories.map((category) => {
            return (
              <div
                role={"button"}
                className={`col-2 pb-3 border-bottom ${
                  category === selectedCategory
                    ? "border-primary"
                    : "border-light"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                <div className="body-normal-semibold white">{category}</div>
              </div>
            );
          })}
        </div>
        <div className="row mt-3">
          {products
            .filter(
              (product) =>
                product.category === selectedCategory || !selectedCategory
            )
            .map((product,i) => {
              return (
                <div className="col-4" key={i}>
                  <Product key={Math.random()} product={product} />
                  <button className="btn btn-primary" onClick={()=>handleAddToCart(product)}>Add</button>
                </div>
              );
            })}
        </div>
      </div>
      <div className="col-3 dark-bg-2">
          <div className="h1 white">Orders #34562</div>
          <div className="row">
            <div className="col-8 white">Name</div>
            <div className="col-2 white">Qty</div>
            <div className="col-2 white">Price</div>
          </div>
          <div style={{
            overflow: "auto",
            height: "80vh"
          }}>
            {orders.map(order => {
              return <OrderProduct product={order} />
            })}
          </div>
          <div className="white">Total: {total}</div>
          <button className="btn btn-primary px-5 mt-5">Pay</button>
      </div>
    </div>
  );
};

export default Home;
