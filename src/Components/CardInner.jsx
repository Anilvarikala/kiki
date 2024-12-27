// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { db } from "./firebase"; // Import Firebase configuration
// import { collection, doc, addDoc, getDocs, setDoc } from "firebase/firestore";
// import Navbar from "./Navbar";
// import Footer from "./Footer";

// import SteelImage from "../../steel.jpg";
// import Paper from "../../paperBuy.jpg";
// import Wood from "../../wood.jpg";
// import Iron from "../../iron.jpg";
// import Rubber from "../../rubber.jpg";
// import Plastic from "../../plastic.jpg";

// const itemsImages = {
//   Steel: SteelImage,
//   Paper: Paper,
//   Wood: Wood,
//   Iron: Iron,
//   Rubber: Rubber,
//   Plastic: Plastic,
// };

// const CardInner = ({ user }) => {
//   const location = useLocation();
//   const { card } = location.state || { card: {} };
//   const [selectedItems, setSelectedItems] = useState({});
//   const userId = user?.id || "defaultUserId"; // Replace with the actual user ID from authentication

//   const handleSelectItem = (item) => {
//     setSelectedItems((prev) => ({
//       ...prev,
//       [item]: prev[item] ? prev[item] + 1 : 1,
//     }));
//   };

//   const handleSell = async () => {
//     if (Object.keys(selectedItems).length === 0) {
//       alert("No items selected to sell.");
//       return;
//     }

//     const transaction = {
//       date: new Date().toISOString(),
//       items: selectedItems,
//       shopName: card.name, // Include shop name
//     };

//     try {
//       if (!userId || userId === "defaultUserId") {
//         alert("Invalid user ID. Please log in.");
//         return;
//       }

//       // Reference to the user's history subcollection
//       const userHistoryRef = collection(db, `users/${userId}/history`);

//       // Save transaction to Firestore
//       await addDoc(userHistoryRef, transaction);

//       // Clear selected items
//       setSelectedItems({});
//       alert("Transaction saved successfully!");
//       console.log("Saved transaction:", transaction); // Debugging log
//     } catch (error) {
//       console.error("Error saving transaction: ", error);
//       alert("Failed to save transaction.");
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="container mt-5">
//         <h2>{card.name} Scrap Buyer</h2>
//         <div className="row">
//           {card.selectedScrapItems &&
//             card.selectedScrapItems.map((item, index) => (
//               <div className="col-md-4" key={index}>
//                 <img
//                   src={itemsImages[item]}
//                   alt={item}
//                   className="img-fluid"
//                   onClick={() => handleSelectItem(item)}
//                   style={{ cursor: "pointer" }}
//                 />
//                 <h4>{item}</h4>
//                 <p>Price: {card.itemPrices[item]}/-</p>
//                 <p>Selected: {selectedItems[item] || 0}</p>
//               </div>
//             ))}
//         </div>
//         <button onClick={handleSell} className="btn btn-success mt-3">
//           Sell Selected Items
//         </button>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default CardInner;

// import { SiTicktick } from "react-icons/si";

// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { db } from "./firebase"; // Firebase configuration
// import { collection, addDoc } from "firebase/firestore";
// import Navbar from "./Navbar";
// import Footer from "./Footer";

// import SteelImage from "../../steel.jpg";
// import Paper from "../../paperBuy.jpg";
// import Wood from "../../wood.jpg";
// import Iron from "../../iron.jpg";
// import Rubber from "../../rubber.jpg";
// import Plastic from "../../plastic.jpg";

// const itemsImages = {
//   Steel: SteelImage,
//   Paper: Paper,
//   Wood: Wood,
//   Iron: Iron,
//   Rubber: Rubber,
//   Plastic: Plastic,
// };

// const CardInner = ({ user }) => {
//   const location = useLocation();
//   const { card } = location.state || { card: {} };
//   const [selectedItems, setSelectedItems] = useState({});
//   const [isProcessing, setIsProcessing] = useState(false); // Track transaction status
//   const userId = user?.id;

//   const handleSelectItem = (item) => {
//     setSelectedItems((prev) => ({
//       ...prev,
//       [item]: prev[item] ? prev[item] + 1 : 1,
//     }));
//   };

//   const handleSell = async () => {
//     if (Object.keys(selectedItems).length === 0) {
//       alert("No items selected to sell.");
//       return;
//     }

//     if (!userId) {
//       alert("Invalid user ID. Please log in.");
//       return;
//     }

//     const transaction = {
//       date: new Date().toISOString(),
//       items: selectedItems,
//       shopName: card.name,
//     };

//     setIsProcessing(true);

//     try {
//       const userHistoryRef = collection(db, `users/${userId}/history`);
//       await addDoc(userHistoryRef, transaction);
//       setSelectedItems({});
//       alert("Transaction saved successfully!");
//       console.log("Saved transaction:", transaction);
//     } catch (error) {
//       console.error("Error saving transaction:", error);
//       alert("Failed to save transaction.");
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   if (!card.name || !card.selectedScrapItems) {
//     return (
//       <div>
//         <Navbar />
//         <div className="container mt-5">
//           <h2>Invalid Shop Information</h2>
//           <p>Unable to load shop details. Please try again.</p>
//         </div>
//         <Footer />
//       </div>
//     );
//   }

//   return (
//     <>
//       <Navbar />
//       <div className="hlo">
//         <div className="paper-div" style={{ padding: "0", marginTop: "0px" }}>
//           <img
//             src="paperBuy.jpg"
//             className="paper-Inner"
//             alt="Paper Buy"
//             style={{ borderRadius: "0px" }}
//           />
//           <div
//             className="paper-div-right"
//             style={{ marginTop: "50px", padding: "0px", color: "white" }}
//           >
//             <h1 className="name-sr" style={{ color: "white" }}>
//               {card.name} Scrap Buyer
//             </h1>
//             <h4>Location: {card.address}</h4>
//             <p>Phone: {card.phone}</p>

//             <br />
//           </div>
//         </div>

//         <div className="con-color container mt-5" style={{ marginTop: "30px" }}>
//           {/* <h2 className="name-ch">{card.name} Scrap Buyer</h2> */}
//           <div className="row">
//             {card.selectedScrapItems.map((item, index) => (
//               <div className="col-md-2 card" key={index} style={{ margin: "15px"}} >
//                 <img
//                   src={itemsImages[item]}
//                   alt={item}
//                   className="card-img-top"
//                   onClick={() => handleSelectItem(item)}
//                   style={{
//                     marginTop: "12px",
//                     height: "200px",
//                     weight: "200px",
//                     objectFit: "cover",
//                   }}
//                 />
//                 <SiTicktick />
//                 <div className="card-body">
//                   <h4 className="card-title">{item}</h4>
//                   <p className="card-text">Price: {card.itemPrices[item]}/-</p>
//                   <p>Selected: {selectedItems[item] || 0}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* <img
//               className="card-img-top"
//               src={profilePic} // This could be a placeholder image or shopkeeper's image
//               alt={`${card.Items} image`}
//               style={{ marginTop:"12px" ,height: "200px",weight:"200px", objectFit: "cover" }} // Optional: Adjust image height/width
//             />
//             <div className="card-body">
//               <h5 className="card-title"></h5>{" "}
//               {/* Buyer type, e.g., 'Books Buyer' */}
//           {/* <p className="card-text">
//                 <strong>Name:</strong> {card.name}{" "}
//                 {/* Shopkeeper's working hours */}

//           <button
//             onClick={handleSell}
//             className="btn btn-warning"
//             style={{ marginBottom: "10px",opacity:"1"}}
//             disabled={isProcessing || Object.keys(selectedItems).length === 0}
//           >
//             {isProcessing ? "Processing..." : "Sell Selected Items"}
//           </button>
//         </div>
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default CardInner;

import { SiTicktick } from "react-icons/si";
import { FaRegCircle } from "react-icons/fa";

import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { db } from "./firebase"; // Firebase configuration
import { collection, addDoc } from "firebase/firestore";
import Navbar from "./Navbar";
import Footer from "./Footer";

import SteelImage from "../../steel.jpg";
import Paper from "../../paperBuy.jpg";
import Wood from "../../wood.jpg";
import Iron from "../../iron.jpg";
import Rubber from "../../rubber.jpg";
import Plastic from "../../plastic.jpg";

const itemsImages = {
  Steel: SteelImage,
  Paper: Paper,
  Wood: Wood,
  Iron: Iron,
  Rubber: Rubber,
  Plastic: Plastic,
};

const CardInner = ({ user }) => {
  const location = useLocation();
  const { card } = location.state || { card: {} };
  const [selectedItems, setSelectedItems] = useState({});
  const [isProcessing, setIsProcessing] = useState(false); // Track transaction status
  const userId = user?.id;

  // Toggle item selection
  const handleSelectItem = (item) => {
    setSelectedItems((prev) => {
      const newSelection = { ...prev };
      if (newSelection[item]) {
        // If item is already selected, remove it
        delete newSelection[item];
      } else {
        // Add the item
        newSelection[item] = 1;
      }
      return newSelection;
    });
  };

  const handleSell = async () => {
    if (Object.keys(selectedItems).length === 0) {
      alert("No items selected to sell.");
      return;
    }

    if (!userId) {
      alert("Invalid user ID. Please log in.");
      return;
    }

    const transaction = {
      date: new Date().toISOString(),
      items: selectedItems,
      shopName: card.name,
    };

    setIsProcessing(true);

    try {
      const userHistoryRef = collection(db, `users/${userId}/history`);
      await addDoc(userHistoryRef, transaction);
      setSelectedItems({});
      alert("Transaction saved successfully!");
      console.log("Saved transaction:", transaction);
    } catch (error) {
      console.error("Error saving transaction:", error);
      alert("Failed to save transaction.");
    } finally {
      setIsProcessing(false);
    }
  };

  if (!card.name || !card.selectedScrapItems) {
    return (
      <div>
        <Navbar />
        <div className="container mt-5">
          <h2>Invalid Shop Information</h2>
          <p>Unable to load shop details. Please try again.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="hlo">
        <div className="paper-div" style={{ padding: "0", marginTop: "0px" }}>
          <img
            src="paperBuy.jpg"
            className="paper-Inner"
            alt="Paper Buy"
            style={{ borderRadius: "0px" }}
          />
          <div
            className="paper-div-right"
            style={{ marginTop: "50px", padding: "0px", color: "white" }}
          >
            <h1 className="name-sr" style={{ color: "white" }}>
              {card.name} Scrap Buyer
            </h1>
            <h4>Location: {card.address}</h4>
            <p>Phone: {card.phone}</p>

            <br />
          </div>
        </div>

        <div className="con-color container mt-5" style={{ marginTop: "30px" }}>
          <div className="row">
            {card.selectedScrapItems.map((item, index) => (
              <div
                className="col-md-2 card"
                key={index}
                style={{ margin: "15px" }}
              >
                <div
                  style={{
                    position: "relative",
                    cursor: "pointer",
                    border: selectedItems[item] ? "2px solid green" : "none",
                    borderRadius: "8px",
                  }}
                  onClick={() => handleSelectItem(item)}
                >
                  <img
                    src={itemsImages[item]}
                    alt={item}
                    className="card-img-top"
                    style={{
                      marginTop: "12px",
                      height: "200px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      backgroundColor: selectedItems[item]
                        ? "black"
                        : "transparent",
                      borderRadius: "50%",
                      padding: "5px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {selectedItems[item] ? (
                      <SiTicktick
                        style={{ color: "white", fontSize: "1.5rem" }}
                      />
                    ) : (
                      <FaRegCircle
                        style={{ color: "gray", fontSize: "1.5rem" }}
                      />
                    )}
                  </div>
                </div>
                <div className="card-body">
                  <h4 className="card-title">{item}</h4>
                  <p className="card-text">Price: {card.itemPrices[item]}/-</p>
                  <p>Selected: {selectedItems[item] || 0}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleSell}
            className="btn btn-warning"
            style={{ marginBottom: "10px", opacity: "1" }}
            disabled={isProcessing || Object.keys(selectedItems).length === 0}
          >
            {isProcessing ? "Processing..." : "Sell Selected Items"}
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default CardInner;
