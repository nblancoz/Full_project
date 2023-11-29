import React, { createContext, useReducer } from "react";
import ProductReducer from "./ProductReducer";
import axios from "axios";

const cart = JSON.parse(localStorage.getItem("cart"));

const initialState = {
  products: [],
  cart: cart || [],
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

  const addCart = (product) => {
    dispatch({
      type: "ADD_CART",
      payload: product,
    });
  };

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        cart:state.cart,
        getProducts,
        addCart,
        clearCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
