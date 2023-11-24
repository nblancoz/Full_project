import React, { createContext, useReducer } from "react";
import ProductReducer from "./ProductReducer";
import axios from "axios";

const initialState = {
  products: [],
};

export const ProductContext = createContext(initialState);

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const getProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8080/products/getAll");
      const action = {
        type: "GET_PRODUCTS",
        payload: res.data,
      };
      dispatch(action);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        getProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
