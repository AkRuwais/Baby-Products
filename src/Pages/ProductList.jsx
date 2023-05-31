import React from "react";
import ProductCard from "./ProductCard";
import './ProductList.css'

export default function ProductList() {
  const products = [
    {
      id: 1,
      image:`https://m.media-amazon.com/images/I/51EmUgM0+jL.jpg`,
      name: `Johnson's baby powder 400 gm`,
      description: "This is a iso approved product",
      price: 294,
    },
    {
      id: 2,
      image:`https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/s/c/screenshot_4_3_18.jpg`,
      name: `Johnson's baby soap`,
      description: "This is a iso approved product",
      price: 40,
    },
    {
      id: 3,
      image:`https://www.bigbasket.com/media/uploads/p/l/40113201_2-sebamed-baby-lotion.jpg`,
      name: `Sebamed Body Lotion 400 ml`,
      description: "This is a iso approved product",
      price: 997,
    },
    {
      id: 4,
      image:`https://www.bigbasket.com/media/uploads/p/l/40028602_1-sebamed-baby-powder.jpg`,
      name: `sebamed Powder 400 gm`,
      description: "This is a iso approved product",
      price: 630,
    },
    {
      id: 5,
      image:`https://www.jiomart.com/images/product/original/491373384/sebamed-baby-cleansing-bar-100-g-product-images-o491373384-p590106064-0-202203170506.jpg`,
      name: `Sebamed Baby Cleancing Bar 100 gm`,
      description: "This is a iso approved product",
      price: 255,
    },
  ];

  return (
    <div className="main">
      <div className="parent">
        {products.map((product) => (
          <div className="child" key={product.id}>
            <ProductCard
              image={product.image}
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
