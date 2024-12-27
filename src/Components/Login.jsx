// import React, { useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth, db } from "./firebase";
// import { useNavigate } from "react-router-dom";
// import { doc, getDoc } from "firebase/firestore";
// import { useUser } from "./UserContext";
// import Navbar from "./Navbar";
// import { Link } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();
//   const { setUser } = useUser();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const userCredential = await signInWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       const user = userCredential.user;

//       // Fetch user data from Firestore
//       const userDoc = await getDoc(doc(db, "users", user.uid));
//       if (userDoc.exists()) {
//         const userData = userDoc.data();
//         setUser(userData); // Set user data in context

//         // Redirect based on user role
//         if (userData.role === "shopkeeper") {
//           navigate("/"); // Redirect to Shopkeeper profile page
//         } else {
//           navigate("/"); // Redirect to Customer profile page
//         }
//       }

//       toast.success("Logged in successfully!");
//     } catch (err) {
//       if (
//         err.code === "auth/invalid-credential" ||
//         err.code === "auth/wrong-password" ||
//         err.code === "auth/wrong-email"
//       ) {
//         toast.error(
//           "Invalid credentials. Please check your email and password."
//         );
//       } else {
//         toast.error("Login failed: " + err.message);
//       }
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div>
//         {error && <p style={{ color: "red" }}>{error}</p>}
//         <form onSubmit={handleLogin} className="signup-form">
//           <h2 className="signup-h2">Login</h2>
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             placeholder="Email"
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             placeholder="Password"
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button type="submit" className="btn btn-danger">
//             Login
//           </button>
//           <div className="login-mode-shift d-flex p-2">
//             <span>Create an account? </span>
//             <Link to="/Signup" style={{ color: "black" }}>
//               Signup
//             </Link>
//           </div>
//         </form>
//         <ToastContainer />
//       </div>
//     </>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { useUser } from "./UserContext";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap for styling

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Fetch user data from Firestore
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        setUser(userData); // Set user data in context

        // Redirect based on user role
        if (userData.role === "shopkeeper") {
          navigate("/"); // Redirect to Shopkeeper profile page
        } else {
          navigate("/"); // Redirect to Customer profile page
        }
      }

      toast.success("Logged in successfully!");
    } catch (err) {
      if (
        err.code === "auth/invalid-credential" ||
        err.code === "auth/wrong-password" ||
        err.code === "auth/wrong-email"
      ) {
        toast.error(
          "Invalid credentials. Please check your email and password."
        );
      } else {
        toast.error("Login failed: " + err.message);
      }
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="login-container d-flex justify-content-center align-items-center"
        style={{
          minHeight: "100vh",
          background: "linear-gradient(to right, #f7f8fa, #e1e8ee)", // Soft gradient background
          padding: "20px",
        }}
      >
        <div
          className="login-card p-5"
          style={{
            width: "100%",
            maxWidth: "500px",
            backgroundColor: "white",
            borderRadius: "15px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            color:"black",
          }}
        >
          <form onSubmit={handleLogin}>
            <h2
              className="text-center mb-4"
              style={{ color: "#333", fontWeight: "bold" }}
            >
              Login
            </h2>

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

            {/* Login Button */}
            <button
              type="submit"
              className="btn btn-primary w-50 left-mar"
              style={{
                backgroundColor: "#ffc107",
                color: "black",
                fontWeight: "bold",
                border:"#ffc107",
              }}
            >
              Login
            </button>

            {/* Create an Account */}
            <div className="text-center mt-3">
              <span>Don't have an account? </span>
              <Link to="/Signup" style={{ color: "#007bff" }}>
                Signup
              </Link>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;

// import React, { useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth, db } from "./firebase";
// import { doc, getDoc } from "firebase/firestore";
// import { useNavigate, Link } from "react-router-dom";
// import { useUser } from "./UserContext";
// import Navbar from "./Navbar";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const { setUser } = useUser();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const userCredential = await signInWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       const user = userCredential.user;

//       const userDoc = await getDoc(doc(db, "users", user.uid));
//       if (userDoc.exists()) {
//         const userData = userDoc.data();
//         setUser(userData); // Update context

//         toast.success("Logged in successfully!");
//         navigate("/"); // Redirect to homepage
//       } else {
//         toast.error("User data not found.");
//       }
//     } catch (err) {
//       toast.error(err.message || "Login failed.");
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="login-container">
//         <form onSubmit={handleLogin} className="login-form">
//           <h2>Login</h2>
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button type="submit" className="btn btn-primary">
//             Login
//           </button>
//           <p>
//             Don't have an account? <Link to="/Signup">Signup</Link>
//           </p>
//         </form>
//         <ToastContainer />
//       </div>
//     </>
//   );
// };

// export default Login;
