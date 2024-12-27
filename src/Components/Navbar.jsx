
// import React, { useState, useEffect } from "react";
// import { IoReorderThree } from "react-icons/io5";
// import { CgProfile } from "react-icons/cg";
// import { Link, useNavigate } from "react-router-dom";
// import { auth, db } from "./firebase"; // Import Firebase auth and db
// import { doc, getDoc } from "firebase/firestore";

// function Navbar() {
//   const [user, setUser] = useState(null);
//   const [Size,SetSize] = useState(true)
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
//       if (currentUser) {
//         // Fetch user data from Firestore
//         const userDoc = await getDoc(doc(db, "users", currentUser.uid));
//         if (userDoc.exists()) {
//           setUser({ ...userDoc.data(), id: currentUser.uid }); // Include the user ID
//         }
//       } else {
//         setUser(null); // If not logged in, reset user state
//       }
//     });

//     return unsubscribe;
//   }, []);

//   const handleSignUpButton = () => {
//     navigate("/CreateAccount");
//   };

//   const handleLogout = () => {
//     auth.signOut().then(() => {
//       setUser(null);
//       navigate("/createAccount");
//     });
//   };


//   const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

//   const handleMouseEnter = () => setDropdownOpen(true);
//   const handleMouseLeave = () => setDropdownOpen(false);

//   const navigateToProfile = () => {
//     // If the user is a shopkeeper, navigate to the shopkeeper profile, else to the customer profile
//     if (user && user.role === "shopkeeper") {
//       navigate("/Shopkeeper"); // Redirect to shopkeeper profile
//     } else {
//       navigate("/Profile"); // Redirect to customer profile
//     }
//   };

//   return (
//     <nav className={`navbar navbar-expand-lg navbar-light ${!Size ? "enlarge":""}`}>
//       <div className="container-fluid">
//         <Link className="navbar-brand text-dark" to="/">
//           KIKI
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <IoReorderThree className="text-light" size={30} onClick={() => SetSize(prev => !prev)}/>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item ">
//               <Link
//                 to="/"
//                 className="nav-link text-dark"
//                 style={{ fontWeight: "bolder" }}
//               >
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item text-dark">
//               <Link
//                 to="/About"
//                 className="nav-link text-dark"
//                 style={{ fontWeight: "bolder" }}
//               >
//                 About
//               </Link>
//             </li>
//             <li className="nav-item text-dark">
//               {/* Pass user ID as state to HistoryPage */}
//               <Link
//                 style={{ fontWeight: "bolder" }}
//                 to="/HistoryPage"
//                 state={{ userId: user?.id }}
//                 className="nav-link text-dark"
//               >
//                 Notification
//               </Link>
//             </li>
           
//           </ul>
//           <div className="d-flex align-items-center">
//           <form class="form-inline my-2 my-lg-0 form-inside d-flex" style={{alignItems:"center"}}>
//                <input type="text" class="form-control mr-sm-2" placeholder="Search" aria-label="Search" style={{fontWeight:"bolder",opacity:"1",
//                }}/>
//                {/* <button style={{margin:"12px",maxWidth:"130px",backgroundColor:"rgb(255, 193, 7)"}}>Search</button> */}
//             </form>
//             {user ? (
//               <div
//                 className="profile-container position-relative"
//                 onMouseEnter={handleMouseEnter}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <CgProfile className="text-dark" size={30} style={{margin:"10px"}}/>
//                 {dropdownOpen && (
//                   <div className="dropdown-menu show position-absolute end-0 mt-2 p-2">
//                     <button
//                       className="dropdown-item"
//                       onClick={navigateToProfile}
//                     >
//                       My Profile
//                     </button>
//                     <button className="dropdown-item" onClick={handleLogout}>
//                       Logout
//                     </button>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <button
//                 onClick={handleSignUpButton}
//                 className="btn btn-warning"
//                 style={{ color: "black", fontSize: "1rem" ,margin:"10px"}}
//               >
//                 Create an account
//               </button>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Additional CSS for hover effects */}
//       <style jsx>{`
//         .dropdown-menu {
//           background-color: black;
//           border-radius: 5px;
//         }
//         .dropdown-item {
//           color: white;
//         }
//         .dropdown-item:hover {
//           background-color: white;
//           color: black;
//         }
//         .profile-container:hover .dropdown-menu {
//           display: block; /* Keep dropdown open while hovering */
//         }
//       `}</style>
//     </nav>
//   );
// }

// export default Navbar;
















import React, { useState, useEffect } from "react";
import { IoReorderThree } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "./firebase"; // Import Firebase auth and db
import { doc, getDoc } from "firebase/firestore";

function Navbar({ onSearch }) {
  const [user, setUser] = useState(null);
  const [size, setSize] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      if (currentUser) {
        // Fetch user data from Firestore
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        if (userDoc.exists()) {
          setUser({ ...userDoc.data(), id: currentUser.uid }); // Include the user ID
        }
      } else {
        setUser(null); // Reset user state if not logged in
      }
    });

    return unsubscribe;
  }, []);

  const handleSignUpButton = () => {
    navigate("/CreateAccount");
  };

  const handleLogout = () => {
    auth.signOut().then(() => {
      setUser(null);
      navigate("/createAccount");
    });
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleMouseEnter = () => setDropdownOpen(true);
  const handleMouseLeave = () => setDropdownOpen(false);

  const navigateToProfile = () => {
    // Redirect to the appropriate profile based on user role
    if (user && user.role === "shopkeeper") {
      navigate("/Shopkeeper");
    } else {
      navigate("/Profile");
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${!size ? "enlarge" : ""}`}>
      <div className="container-fluid">
        <Link className="navbar-brand text-dark" to="/">
          KIKI
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <IoReorderThree className="text-light" size={30} onClick={() => setSize((prev) => !prev)} />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link text-dark" style={{ fontWeight: "bolder" }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-link text-dark" style={{ fontWeight: "bolder" }}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/HistoryPage"
                state={{ userId: user?.id }}
                className="nav-link text-dark"
                style={{ fontWeight: "bolder" }}
              >
                Notification
              </Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            {/* Search bar */}
            <form className="form-inline my-2 my-lg-0 form-inside d-flex" style={{ alignItems: "center" }}>
              <input
                type="text"
                className="form-control mr-sm-2"
                placeholder="Search"
                aria-label="Search"
                style={{ fontWeight: "bolder", opacity: "1" }}
                onChange={onSearch} // Trigger search on input change
              />
            </form>
            {/* User profile or sign-up button */}
            {user ? (
              <div
                className="profile-container position-relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <CgProfile className="text-dark" size={30} style={{ margin: "10px" }} />
                {dropdownOpen && (
                  <div className="dropdown-menu show position-absolute end-0 mt-2 p-2">
                    <button className="dropdown-item" onClick={navigateToProfile}>
                      My Profile
                    </button>
                    <button className="dropdown-item" onClick={handleLogout}>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={handleSignUpButton}
                className="btn btn-warning"
                style={{ color: "black", fontSize: "1rem", margin: "10px" }}
              >
                Create an account
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Additional CSS for hover effects */}
      <style jsx>{`
        .dropdown-menu {
          background-color: black;
          border-radius: 5px;
        }
        .dropdown-item {
          color: white;
        }
        .dropdown-item:hover {
          background-color: white;
          color: black;
        }
        .profile-container:hover .dropdown-menu {
          display: block;
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
