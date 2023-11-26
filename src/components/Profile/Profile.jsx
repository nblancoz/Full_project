import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";

const Profile = () => {
  const { getUserInfo, user } = useContext(UserContext);

  useEffect(() => {
    getUserInfo();
  }, []);

  if (!user) {
    return <span>Login to view your profile</span>;
  }

  return (
    <div>
      <p>Profile {user.name}</p>
    </div>
  );
};

export default Profile;
