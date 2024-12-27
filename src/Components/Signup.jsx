// import React, { useState, useEffect } from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth, db } from "./firebase"; // Ensure Firestore is imported
// import { doc, setDoc } from "firebase/firestore";
// import { useNavigate, useLocation, Link } from "react-router-dom";
// import Navbar from "./Navbar";
// import { useUser } from "./UserContext";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Signup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [shopName, setShopName] = useState(""); // For shopkeepers
//   const [error, setError] = useState("");
//   const navigate = useNavigate();
//   const { setUser } = useUser();

//   const location = useLocation(); // Get the location (to read query parameters)
//   const queryParams = new URLSearchParams(location.search);
//   const role = queryParams.get("role"); // Get the role from the URL (either 'customer' or 'shopkeeper')

//   // UseEffect to handle any setup on mount
//   useEffect(() => {
//     if (role === "shopkeeper") {
//       // If shopkeeper, make sure the shopName is cleared (because it's the required field)
//       setShopName("");
//     }
//   }, [role]);

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       const user = userCredential.user;

//       // Save user data in Firestore based on the role
//       const userData = {
//         name: role === "customer" ? name : shopName, // If customer, save name, else save shopName
//         phone,
//         email,
//         uid: user.uid,
//         role, // Save the role (either 'customer' or 'shopkeeper')
//       };

//       // Store data in the 'users' collection
//       await setDoc(doc(db, "users", user.uid), userData);
//       setUser(userData); // Store user data in context
//       toast.success("Account created successfully!");

//       // If the user is a shopkeeper, save the shopkeeper data to 'shopkeepers' collection
//       if (role === "shopkeeper") {
//         const shopkeeperData = {
//           name: shopName,
//           phone,
//           email,
//           uid: user.uid,
//           shopName, // Specific data for shopkeeper
//           selectedScrapItems: [], // Initialize with empty selected scrap items
//           itemPrices: {}, // Initialize with empty item prices
//         };

//         // Create a new shopkeeper document in the 'shopkeepers' collection
//         await setDoc(doc(db, "shopkeepers", user.uid), shopkeeperData);
//       }

//       navigate("/"); // Redirect to homepage after signup
//     } catch (err) {
//       if (err.code === "auth/email-already-in-use") {
//         toast.error("Email already in use.");
//       } else {
//         toast.error("Signup failed: " + err.message);
//       }
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="signup-container" style={{minHeight:"80%"}}>
//         {error && <p style={{ color: "red" }}>{error}</p>}
//         <form onSubmit={handleSignup} className="signup-form">
//           <h2 className="signup-h2">Signup</h2>

//           {/* Conditionally render first input field based on role */}
//           {role === "customer" ? (
//             <>
//               <label htmlFor="name">Name</label>
//               <input
//                 type="text"
//                 placeholder="Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//             </>
//           ) : (
//             <>
//               <label htmlFor="shopName">Shop Name</label>
//               <input
//                 type="text"
//                 placeholder="Shop Name"
//                 value={shopName}
//                 onChange={(e) => setShopName(e.target.value)}
//                 required
//               />
//             </>
//           )}

//           <label htmlFor="phone">Phone</label>
//           <input
//             type="text"
//             placeholder="Phone Number"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             required
//           />
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <label htmlFor="password" className="password-label">
//             Password
//           </label>
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />

//           <button type="submit" className="btn btn-danger">
//             Signup
//           </button>

//           <div className="login-mode-shift d-flex p-2">
//             <span>Already have an account? </span>
//             <Link to="/login" style={{ color: "black", marginLeft: "5px" }}>
//               Login
//             </Link>
//           </div>
//         </form>
//         <ToastContainer />
//       </div>
//     </>
//   );
// };

// export default Signup;
import React, { useState, useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useUser } from "./UserContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [shopName, setShopName] = useState(""); // For shopkeepers
  const navigate = useNavigate();
  const { setUser } = useUser();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const role = queryParams.get("role");

  useEffect(() => {
    if (role === "shopkeeper") {
      setShopName("");
    }
  }, [role]);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const userData = {
        name: role === "customer" ? name : shopName,
        phone,
        email,
        uid: user.uid,
        role,
      };

      await setDoc(doc(db, "users", user.uid), userData);
      setUser(userData);
      toast.success("Account created successfully!");

      if (role === "shopkeeper") {
        const shopkeeperData = {
          name: shopName,
          phone,
          email,
          uid: user.uid,
          shopName,
          selectedScrapItems: [],
          itemPrices: {},
        };

        await setDoc(doc(db, "shopkeepers", user.uid), shopkeeperData);
      }

      navigate("/");
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        toast.error("Email already in use.");
      } else {
        toast.error("Signup failed: " + err.message);
      }
    }
  };

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div
        className="signup-container d-flex justify-content-center align-items-center"
        style={{
          minHeight: "100vh",
          background: "linear-gradient(to right, #f7f8fa, #e1e8ee)", // Soft gradient background
          padding: "20px",
        }}
      >
        <div
          className="signup-card p-5"
          style={{
            width: "100%",
            maxWidth: "500px",
            backgroundColor: "white",
            borderRadius: "15px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <form onSubmit={handleSignup}>
            <h2
              className="text-center mb-4"
              style={{ color: "#333", fontWeight: "bold" }}
            >
              Signup
            </h2>

            {/* Floating Label for Name or Shop Name */}
            <div className="form-floating mb-3">
              <input
                type="text"
                id="nameOrShopName"
                className="form-control"
                style={{opacity:1}}
                placeholder={
                  role === "customer"
                    ? "Enter your name"
                    : "Enter your shop name"
                }
                value={role === "customer" ? name : shopName}
                onChange={(e) =>
                  role === "customer"
                    ? setName(e.target.value)
                    : setShopName(e.target.value)
                }
                required
              />
              {/* <label htmlFor="nameOrShopName">
                {role === "customer" ? "Name" : "Shop Name"}
              </label> */}
            </div>

            {/* Floating Label for Phone */}
            <div className="form-floating mb-3">
              <input
                type="text"
                id="phone"
                className="form-control"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                style={{opacity:1}}
              />
              {/* <label htmlFor="phone">Phone</label> */}
            </div>

            {/* Floating Label for Email */}
            <div className="form-floating mb-3">
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{opacity:1}}
              />
              {/* <label htmlFor="email">Email</label> */}
            </div>

            {/* Floating Label for Password */}
            <div className="form-floating mb-4">
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{opacity:1}}
              />
              {/* <label htmlFor="password">Password</label> */}
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className="btn btn-warning w-50 left-mar"
              style={{
                backgroundColor: "#ffc107",
                color: "black",
                fontWeight: "bold",
              }}
            >
              Signup
            </button>

            {/* Already have an account */}
            <div className="text-center mt-3">
              <span>Already have an account? </span>
              <Link to="/login" style={{ color: "#007bff" }}>
                Login
              </Link>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Signup;
