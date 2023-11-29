import React, { useContext } from "react";
import { Button, Divider, List, Typography } from "antd";
import { ProductContext } from "../../context/ProductContext/ProductState";
import "./Cart.scss";
import orderService from "../../services/OrderService";
import { UserContext } from "../../context/UserContext/UserState";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart } = useContext(ProductContext);
  const { token } = useContext(UserContext);
  const name = cart.map((product) => product.name);
  const img = cart.map((product) => product.img);
  return (
    <div className="cartContainer">
      <Divider orientation="left">Cart</Divider>
      <List
        header={<div>Products</div>}
        footer={
          <div className="container-buttons">
            <Button onClick={clearCart}>Clear Cart</Button>
            {token ? (
              <Button
                type="primary"
                onClick={() => {
                  orderService.createOrder(cart);
                  clearCart();
                }}
              >
                Create Order
              </Button>
            ) : (
              <Link to="/login">Go to login to shops</Link>
            )}
          </div>
        }
        bordered
        dataSource={cart}
        renderItem={(cart) => (
          <List.Item>
            <Typography.Text mark>Name product:</Typography.Text> {cart.name}
            <br />
            <img src={cart.img} alt="" style={{ maxWidth: "100px" }} />
          </List.Item>
        )}
      />
    </div>
  );
};

export default Cart;
