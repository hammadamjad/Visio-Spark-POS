import React from "react";
import Product from "../../components/Product";

const products = [
  {
    id: 1,
    imageUrl: "./product-1.svg",
    name: "Product 1",
    price: 2.99,
    quantity: 2,
  },
  {
    id: 1,
    imageUrl: "./product-1.svg",
    name: "Product 1",
    price: 2.99,
    quantity: 2,
  },
  {
    id: 1,
    imageUrl: "./product-1.svg",
    name: "Product 1",
    price: 2.99,
    quantity: 2,
  },
  {
    id: 1,
    imageUrl: "./product-1.svg",
    name: "Product 1",
    price: 2.99,
    quantity: 2,
  },
  {
    id: 1,
    imageUrl: "./product-1.svg",
    name: "Product 1",
    price: 2.99,
    quantity: 2,
  },
  {
    id: 1,
    imageUrl: "./product-1.svg",
    name: "Product 1",
    price: 2.99,
    quantity: 2,
  },
  {
    id: 1,
    imageUrl: "./product-1.svg",
    name: "Product 1",
    price: 2.99,
    quantity: 2,
  },
  {
    id: 1,
    imageUrl: "./product-1.svg",
    name: "Product 1",
    price: 2.99,
    quantity: 2,
  },
  {
    id: 1,
    imageUrl: "./product-1.svg",
    name: "Product 1",
    price: 2.99,
    quantity: 2,
  },
  {
    id: 1,
    imageUrl: "./product-1.svg",
    name: "Product 1",
    price: 2.99,
    quantity: 2,
  },
];

const Home = () => {
  return (
    <div className="home-container dark-bg-1 p-5">
      <div className="row">
        <div className="col-8">
          <div className="h1 white">Muneeb Ahmed</div>
          <div className="body-large-regular text-lighter">Tuesday, 2 Feb 2022</div>
        </div>
        <div className="col-4"></div>
      </div>
      <div className="row">
        {products.map((product) => {
          return (
            <div className="col-4">
              <Product key={Math.random()} product={product} />;
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
