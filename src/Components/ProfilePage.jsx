import React, { useEffect, useState } from "react";
import { useUser } from "./UserContext"; // Assuming you have UserContext to get user details
import Profile from "./Profile";
import ShopKeeper from "./Shopkeeper"; // Shopkeeper Profile Component

const ProfilePage = () => {
  const { user } = useUser(); 
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    // Fetch the role from the user object or Firestore if not available in context
    if (user) {
      setUserRole(user.role); // Assuming user.role contains 'customer' or 'shopkeeper'
    }
  }, [user]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {userRole === "customer" ? (
        <Profile /> // Render Customer Profile
      ) : userRole === "shopkeeper" ? (
        <ShopKeeper /> // Render Shopkeeper Profile
      ) : (
        <p>Role not defined</p> // Handle unexpected role
      )}
    </div>
  );
};

export default ProfilePage;
