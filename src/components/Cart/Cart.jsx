import React, { useContext } from "react";
import { Button, Divider, List, Typography, notification } from "antd";
import { ProductContext } from "../../context/ProductContext/ProductState";
import "./Cart.scss";
import orderService from "../../services/OrderService";
import { UserContext } from "../../context/UserContext/UserState";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart } = useContext(ProductContext);
  const { token } = useContext(UserContext);
  const isCartEmpty = cart.length === 0;

  const createOrder=async()=>{
    const order= await orderService.createOrder(cart);
    if (order) {
      clearCart();
      notification.success({
        message:"Order placed successfully"
      })
    } else {
      notification.error({
        message:"An error has ocurred"
      })
    }
  }
  return (
    <div className="allContainer">
      <div className="cartContainer">
        <Divider orientation="left">Cart</Divider>
        <List
          header={<div>Products</div>}
          footer={
            <div className="container-buttons">
              <Button onClick={clearCart}>Clear Cart</Button>
              {!isCartEmpty && ( 
                <>
                  {token ? (
                    <Button
                      type="primary"
                      onClick={createOrder}
                    >
                      Create Order
                    </Button>
                  ) : (
                    <Link to="/login">First login</Link>
                  )}
                </>
              )}
            </div>
          }
          bordered
          dataSource={cart}
          renderItem={(cart) => (
            <List.Item>
              <Typography.Text mark>Products:</Typography.Text> {cart.name}
              <br />
              <img src={cart.img} alt="" style={{ maxWidth: "100px" }} />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default Cart;
