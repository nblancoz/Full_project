import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { useNavigate } from "react-router-dom";
import "./Profile.scss";
import { Card } from "antd";
import { UserOutlined } from "@ant-design/icons";

const Profile = () => {
  const { getUserInfo, user } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    getUserInfo();
  }, []);

  if (!user) {
    return <span>Login to view your profile</span>;
  }

  const backToHome = async () => {
    await navigate("/");
  };
  return (
    <div className="profile">
      <h1 className="title">Hi, Welcome to your profile.</h1>
      <p className="pOrders">Here you can consult your orders.</p>
      <div className="centeredCardWrapper">
        <Card
          className="profileCard"
          title="User:"
          bordered={true}
          style={{
            width: 500,
          }}
        >
          <UserOutlined /> {user.name}
          <p>{user.email}</p>
          {user.Orders?.map((order, index) => {
            return (
              <Card
                className="container-card"
                key={order.id}
                title={`Order ${index + 1}:`}
                style={{ marginTop: 16, width: 380 }}
              >
                {order.Products.map((product) => {
                  return (
                    <>
                      <p>{product.name}</p>
                      <p>{product.price}</p>
                    </>
                  );
                })}
              </Card>
            );
          })}
        </Card>
      </div>
      <button onClick={backToHome} className="button">
        Continue shopping
      </button>
    </div>
  );
};

export default Profile;
