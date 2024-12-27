// import React, { createContext, useContext, useState, useEffect } from "react";
// import { auth, db } from "./firebase";
// import { doc, getDoc } from "firebase/firestore";

// const UserContext = createContext();

// export const useUser = () => useContext(UserContext);

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
//       if (authUser) {
//         const userRef = doc(db, "users", authUser.uid);
//         const docSnap = await getDoc(userRef);
//         if (docSnap.exists()) {
//           setUser(docSnap.data());
//         }
//       } else {
//         setUser(null);
//       }
//     });
//     return () => unsubscribe();
//   }, []);

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

import React, { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "./firebase"; // Ensure this is correctly configured
import { doc, getDoc } from "firebase/firestore";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        try {
          const userRef = doc(db, "users", authUser.uid);
          const docSnap = await getDoc(userRef);

          if (docSnap.exists()) {
            setUser({ uid: authUser.uid, ...docSnap.data() }); // Include UID for easier reference
          } else {
            console.error("User document does not exist in Firestore.");
            setUser(null);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
          setUser(null);
        }
      } else {
        setUser(null);
      }
      setLoading(false); // Set loading to false once complete
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Render a loading indicator while fetching user data
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
