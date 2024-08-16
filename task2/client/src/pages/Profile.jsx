import React from "react";
import { useSelector } from "react-redux";

import Logout from "../components/Logout";
import ChangePassword from "../components/ChangePassword";
import ChangeUsername from "../components/ChangeUsername";
import ChangeName from "../components/ChangeName";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="flex flex-col items-center justify-start w-full h-full px-5 py-3 gap-3">
      <h1 className="font-bold text-2xl">Profile</h1>
      <div className="flex flex-col w-2/3 h-auto px-3 py-3 gap-3 border border-gray-600 rounded-2xl">
        <div className="flex items-center justify-between p-3">
          <p>Username: <span className="text-gray-500">{user.username}</span></p>
          <ChangeUsername />
        </div>
        <div className="flex items-center justify-between p-3">
          <p>Name: <span className="text-gray-500">{user.name}</span></p>
          <ChangeName />
        </div>
        <div className="flex items-center justify-center p-3 gap-3">
          <Logout />
          <ChangePassword />
        </div>
      </div>
    </div>
  );
};

export default Profile;
