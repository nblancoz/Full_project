import axios from "axios";

const API_URL = "http://localhost:8080/orders";

const createOrder = async (cart) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const ProductId = cart.map((product) => product.id);
  const order = await axios.post(
    API_URL + "/create",
    { ProductId },
    {
      headers: {
        authorization: token,
      },
    }
  );
  if (order) {
    return console.log("Order placed successfully");
  } else {
    console.log("An error has ocurred");
  }
  return order;
};

const orderService = {
  createOrder,
};

export default orderService;
