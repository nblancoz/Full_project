import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../context/ProductContext/ProductState";

const Products = () => {
  const { products, getProducts } = useContext(ProductContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1>hola</h1>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <div>
              <h2>{product.name}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
