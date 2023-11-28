import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { useNavigate } from "react-router-dom";
import "./Profile.scss";

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
      <button onClick={backToHome} className="button">
        Continue shopping
      </button>
    </div>
  );
};

export default Profile;
