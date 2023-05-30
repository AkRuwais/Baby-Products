import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const products = [
    {
      id: 1,
      name: `Johnson's baby powder`,
      description: "This is a iso approved product",
      price: 30,
    },
    {
      id: 2,
      name: `Johnson's baby soap`,
      description: "This is a iso approved product",
      price: 15,
    },
    {
      id: 3,
      name: `Sebamed Body Lotion`,
      description: "This is a iso approved product",
      price: 45,
    },
    {
      id: 4,
      name: `sebamed Powder`,
      description: "This is a iso approved product",
      price: 35,
    },
    {
      id: 5,
      name: `Sebamed Baby Cleancing Bar`,
      description: "This is a iso approved product",
      price: 30,
    },
  ];

  return (
    <div>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard
              name={product.name}
              description={product.description}
              price={product.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
