import axios from "axios";
import products from "../context/ProductContext/ProductReducer";

const API_URL = "http://localhost:8080/orders";

const createOrder = async (cart) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const productIds = cart.map((product) => product.id);
  const order = await axios.post(
    API_URL + "/create",
    { productIds },
    {
      headers: {
        authorization: token,
      },
    }
  );
  return order;
};

const orderService = {
  createOrder,
};

export default orderService;
