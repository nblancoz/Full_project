import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { useNavigate } from "react-router-dom";

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
    <div>
      <p>Profile {user.name}</p>
      <button onClick={backToHome}>back to home</button>
    </div>
  );
};

export default Profile;
