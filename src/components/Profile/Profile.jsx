import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { useNavigate } from "react-router-dom";
import "./Profile.scss";
import { Card } from "antd";

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
    navigate("/");
  };
  return (
    <div className="profile">
      <h1 className="title">Hi, {user.name}. Welcome to your profile.</h1>
      <p className="pOrders">Here you can consult your orders.</p>
      <Card
        title={user.name}
        bordered={true}
        style={{
          width: 500,
        }}
      >
        <p>{user.email}</p>
        {user.Orders?.map((order, index) => {
          return (
            <Card
              className="container-card"
              key={order.id}
              title={`Order ${index + 1}`}
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
      <button onClick={backToHome} className="button">
        Continue shopping
      </button>
    </div>
  );
};

export default Profile;

// return (
//   <>
//     <h1>My account</h1>
//     <div className="container-myaccount">
//       <Card
//         title={user.FirstName}
//         bordered={true}
//         style={{
//           width: 500,
//         }}
//       >
//         <p>{user.email}</p>
//         <p>{user.PhoneNumber}</p>
//         {user.Scooters?.map((scooter, index) => (
//           <Card className="container-card"
//             key={index}
//             title={`Order ${index + 1}`}
//             style={{ marginTop: 16, width: 380 }}
//           >
//             <p>Date: {scooter.CustomerScooter.createdAt}</p>
//             <p>Brand: {scooter.Brand}</p>
//             <p>Model: {scooter.Model}</p>
//           </Card>
//         ))}
//       </Card>
//     </div>
//   </>
