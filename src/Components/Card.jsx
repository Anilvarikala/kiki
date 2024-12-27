// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useNavigate } from "react-router-dom";

// const Card = ({ cardData }) => {
//   const navigate = useNavigate();

//   const handleButtonClick = (card) => {
//     //  const images = card.sources;

//     navigate("/CardInner", { state: { card } });
//   };

//   const handleCardClick = (card) => {
//     navigate("/CardInner", { state: { card } });
//   };

//   return (
//     <div className="container mt-4">
//       <div className="row">
//         {cardData.map((card) => (
//           <div key={card.id} className="card" style={{ width: "15rem",cursor: "pointer"  }}  onClick={(e) =>
//             {e.stopPropagation();
//             handleCardClick(card)}}>
//             <img
//               className="card-img-top"
//               src={card.image}
//               alt="Card image cap"
//             />
//             <div className="card-body">
//               <h5 className="card-title">{card.Items}</h5>
//               <p className="card-text">{card.place}</p>
//               {/* {console.log(card.sources)} */}

//               <button
//                 class="btn btn-success"
//                 onClick={() => handleButtonClick(card)}
//               >
//                 Shop Keeper
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Card;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import profilePic from "../../img-shop.jpg";
const Card = ({ cardData }) => {
  const navigate = useNavigate();

  const handleButtonClick = (card) => {
    // Navigate to the CardInner component, passing the shopkeeper details
    navigate("/CardInner", { state: { card } });
  };

  const handleCardClick = (card) => {
    // Handle card click to navigate to CardInner
    navigate("/CardInner", { state: { card } });
  };

  return (
    <div className="main-con ">
    <div className="container mt-4 d-flex card-small">
      <div className="row">
        {cardData && cardData.map((card) => (
          <div
            key={card.id}
            className="card col-md-4 mb-4"
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              e.stopPropagation();
              handleCardClick(card);
            }}
          >
            <img
              className="card-img-top"
              src={profilePic} // This could be a placeholder image or shopkeeper's image
              alt={`${card.Items} image`}
              style={{ marginTop:"12px" ,height: "200px",weight:"200px", objectFit: "cover" }} // Optional: Adjust image height/width
            />
            <div className="card-body"> 
              <h5 className="card-title"></h5>{" "}
              {/* Buyer type, e.g., 'Books Buyer' */}
              <p className="card-text">
                <strong>Name:</strong> {card.name}{" "}
                {/* Shopkeeper's working hours */}
              </p>
              
              {/* Place where the shopkeeper is located */}
              <p className="card-text">
                <strong>Address:</strong> {card.address}{" "}
                {/* Shopkeeper's contact number */}
              </p>
              <p className="card-text">{`Phone : ${card.phone}`}</p>{" "}
              {/* Button to navigate to shopkeeper profile details
              <button
                className="btn btn-primary w-100"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent card click
                  handleButtonClick(card); // Navigate to CardInner with card data
                }}
              >
                View Profile
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Card;

// import React, { useState, useEffect } from "react";
// import { db } from "./firebase"; // Import Firebase config
// import { collection, onSnapshot } from "firebase/firestore";

// const Card = () => {
//   const ini = [
//         {
//           id: 1,
//           image: "Books.jpg",
//           Items: "Books Buyer",
//           name: "Anil",
//           place: "Gatkesar",
//           number: "7013725762",
//           Timings: "9:00 AM - 6:00 PM",
//           sources: [
//             "books-inner.jpg",
//             "box.jpg",
//             "bottle.jpg",
//             "news.jpg",
//             "wood.jpg",
//             "rolls.jpg",
//           ],
//         },
//         {
//           id: 2,
//           image: "Steel.jpg",
//           Items: "Steel Buyer",
//           name: "Babhi",
//           number: "9177814545",
//           place: "Chengicherla",
//           Timings: "9:00 AM - 6:00 PM",
//           sources: [
//             "books-inner.jpg",
//             "box.jpg",
//             "bottle.jpg",
//             "news.jpg",
//             "wood.jpg",
//             "rolls.jpg",
//           ],
//         },
//         {
//           id: 3,
//           image: "paper.jpg",
//           Items: "Paper Buyer",
//           place: "Uppal",
//           name: "Sai",
//           number: "9177937885",
//           Timings: "9:00 AM - 6:00 PM",
//           sources: [
//             "books-inner.jpg",
//             "box.jpg",
//             "bottle.jpg",
//             "news.jpg",
//             "wood.jpg",
//             "rolls.jpg",
//           ],
//         },
//   ]
//   const [cardData, setCardData] = useState(ini);

//   useEffect(() => {
//     // Real-time listener to fetch and update shopkeeper data from Firestore
//     const unsubscribe = onSnapshot(collection(db, "shopkeepers"), (snapshot) => {
//       const data = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setCardData(data); // Update cardData with the latest data
//     });

//     // Cleanup listener on unmount
//     return () => unsubscribe();
//   }, []); // Runs once on component mount

//   return (
//     <div className="card-container">
//       {cardData.map((card) => (
//         <div key={card.id} className="card">
//           <img src={card.image} alt={card.Items} />
//           <h3>{card.Items}</h3>
//           <p>Name: {card.name}</p>
//           <p>Place: {card.place}</p>
//           <p>Contact: {card.number}</p>
//           <p>Timings: {card.Timings}</p>
//           {/* <div className="sources">
//             {card.sources.map((source, index) => (
//               <img key={index} src={source} alt={`Source ${index + 1}`} />
//             ))}
//           </div> */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Card;
