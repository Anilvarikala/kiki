// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useUser } from "./UserContext"; // Assuming you have a UserContext to manage user state
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const CreateAccountFirst = () => {
//   const navigate = useNavigate();
//   const { user } = useUser(); // Access the current user from context

//   // Redirect authenticated users to the homepage
//   useEffect(() => {
//     if (user) {
//       toast.info("You are already logged in. Redirecting to the homepage...");
//       navigate("/home");
//     }
//   }, [user, navigate]);

//   // Redirect functions with role-specific logic
//   const handleNavigation = (role) => {
//     navigate(`/Signup?role=${role}`); // Use query params for role
//     toast.info(
//       `Redirecting to ${
//         role === "customer" ? "Customer" : "Shopkeeper"
//       } Signup...`
//     );
//   };

//   return (
//     <>
//       <div className="cut" style={{height:"100vh"}}>
//         <div
//           className="btnAccount d-flex justify-content-center align-items-center"
//           style={{ minHeight: "100vh", gap: "10px" }}
//         >
//           {/* Customer Option */}
//           <div
//             className="box text-center m-3 d-flex"
//             onClick={() => handleNavigation("customer")}
//             style={{ cursor: "pointer", flexDirection: "column", gap: "10px" }}
//           >
//             <img
//               src="img-user.jpg"
//               alt="Customer"
//               className="img-fluid mb-2"
//               style={{ maxWidth: "250px", borderRadius: "8px" }}
//             />
//             <button className="btn btn-secondary">Customer</button>
//           </div>

//           {/* Shopkeeper Option */}
//           <div
//             className="box text-center m-3 d-f"
//             onClick={() => handleNavigation("shopkeeper")}
//             style={{ cursor: "pointer", flexDirection: "column", gap: "8px" }}
//           >
//             <img
//               src="img-shop.jpg"
//               alt="Shopkeeper"
//               className="img-fluid mb-2"
//               style={{ maxWidth: "250px", borderRadius: "8px" }}
//             />
//             <button className="btn btn-secondary">ShopKeeper</button>
//           </div>
//         </div>

//         {/* Toast Notifications */}
//         <ToastContainer
//           position="top-right"
//           autoClose={3000}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//           theme="colored"
//         />
//       </div>
//     </>
//   );
// };

// export default CreateAccountFirst;

// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useUser } from "./UserContext"; // Assuming you have a UserContext to manage user state
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const CreateAccountFirst = () => {
//   const navigate = useNavigate();
//   const { user } = useUser(); // Access the current user from context

//   // Redirect authenticated users to the homepage
//   useEffect(() => {
//     if (user) {
//       toast.info("You are already logged in. Redirecting to the homepage...");
//       navigate("/home");
//     }
//   }, [user, navigate]);

//   // Redirect functions with role-specific logic
//   const handleNavigation = (role) => {
//     navigate(`/Signup?role=${role}`); // Use query params for role
//     toast.info(
//       `Redirecting to ${
//         role === "customer" ? "Customer" : "Shopkeeper"
//       } Signup...`
//     );
//   };

//   return (
//     <>
//       <div
//         className="cut"
//         style={{
//           height: "100vh",
//           backgroundColor: "lightGray", // Light background color
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <div
//           className="btnAccount c-flex d-flex justify-content-center align-items-center"
//           style={{ minHeight: "80vh", gap: "10px" }}
//         >
//           {/* Customer Option */}
//           <div
//             className="cd-m box text-center m-3 d-flex"
//             onClick={() => handleNavigation("customer")}
//             style={{
//               cursor: "pointer",
//               flexDirection: "column",
//               gap: "10px",
//               padding: "15px",
//               backgroundColor: "white", // Light background for boxes
//               borderRadius: "8px",
//               boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for elevation
//             }}
//           >
//             <img
//               src="img-user.jpg"
//               alt="Customer"
//               className="img-fluid mb-2"
//               style={{ maxWidth: "250px", borderRadius: "8px" }}
//             />
//             <button className="btn btn-warning">Customer</button>
//           </div>

//           {/* Shopkeeper Option */}
//           <div
//             className="box text-center m-3 d-f"
//             onClick={() => handleNavigation("shopkeeper")}
//             style={{
//               cursor: "pointer",
//               flexDirection: "column",
//               gap: "8px",
//               padding: "15px",
//               backgroundColor: "white", // Light background for boxes
//               borderRadius: "8px",
//               boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for elevation
//             }}
//           >
//             <img
//               src="img-shop.jpg"
//               alt="Shopkeeper"
//               className="img-fluid mb-2"
//               style={{ maxWidth: "250px", borderRadius: "8px" }}
//             />
//             <button className="btn btn-warning">ShopKeeper</button>
//           </div>
//         </div>

//         {/* Toast Notifications */}
//         <ToastContainer
//           position="top-right"
//           autoClose={3000}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//           theme="colored"
//         />
//       </div>
//     </>
//   );
// };

// export default CreateAccountFirst;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "./UserContext"; // Assuming you have a UserContext to manage user state
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateAccountFirst = () => {
  const navigate = useNavigate();
  const { user } = useUser(); // Access the current user from context

  // Redirect authenticated users to the homepage
  useEffect(() => {
    if (user) {
      toast.info("You are already logged in. Redirecting to the homepage...");
      navigate("/home");
    }
  }, [user, navigate]);

  // Redirect functions with role-specific logic
  const handleNavigation = (role) => {
    navigate(`/Signup?role=${role}`); // Use query params for role
    toast.info(
      `Redirecting to ${
        role === "customer" ? "Customer" : "Shopkeeper"
      } Signup...`
    );
  };

  return (
    <>
      <div
        className="cut"
        style={{
          height: "100%",
          backgroundColor: "lightGray",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="btnAccount d-flex flex-column flex-sm-row justify-content-center align-items-center"
          style={{
            minHeight: "100vh",
            gap: "20px", // Adjust gap for better spacing
            padding: "20px",
          }}
        >
          {/* Customer Option */}
          <div
            className="box text-center"
            onClick={() => handleNavigation("customer")}
            style={{
              cursor: "pointer",
              flexDirection: "column",
              display: "flex",
              gap: "10px",
              padding: "15px",
              backgroundColor: "white",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              width: "100%",
              maxWidth: "300px", // Set maximum width for responsiveness
            }}
          >
            <img
              src="img-user.jpg"
              alt="Customer"
              className="img-fluid mb-2"
              style={{ maxWidth: "100%", borderRadius: "8px" }}
            />
            <button className="btn btn-warning">Customer</button>
          </div>

          {/* Shopkeeper Option */}
          <div
            className="box text-center"
            onClick={() => handleNavigation("shopkeeper")}
            style={{
              cursor: "pointer",
              flexDirection: "column",
              display: "flex",
              gap: "10px",
              padding: "15px",
              backgroundColor: "white",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              width: "100%",
              maxWidth: "300px", // Set maximum width for responsiveness
            }}
          >
            <img
              src="img-shop.jpg"
              alt="Shopkeeper"
              className="img-fluid mb-2"
              style={{ maxWidth: "100%", borderRadius: "8px" }}
            />
            <button className="btn btn-warning">ShopKeeper</button>
          </div>
        </div>

        {/* Toast Notifications */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </>
  );
};

export default CreateAccountFirst;
