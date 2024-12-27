// import React, { useState, useEffect } from "react";
// import "./App.css";
// import Navbar from "./Components/Navbar.jsx";

// import "bootstrap/dist/css/bootstrap.min.css";
// import Slider from "./Components/Slider.jsx";
// import Card from "./Components/Card.jsx";
// import Footer from "./Components/Footer.jsx";
// import { db } from "./Components/firebase.js"; // Assuming firebase is initialized in firebase.js
// import { collection, getDocs } from "firebase/firestore"; // Firebase Firestore functions

// const App = () => {
//   const [shopkeepers, setShopkeepers] = useState([]); // State to store shopkeeper data

//   // Fetch shopkeepers data from Firestore on component mount
//   useEffect(() => {
//     const fetchShopkeepers = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, "shopkeepers"));
//         const shopkeeperData = querySnapshot.docs.map((doc) => doc.data());
//         setShopkeepers(shopkeeperData); // Set the shopkeepers data to state
//       } catch (error) {
//         console.error("Error fetching shopkeepers:", error);
//       }
//     };

//     fetchShopkeepers();
//   }, []); // Empty dependency array ensures this runs once on mount

//   return (
//     <>
    

//       <Navbar />
//       <Slider
//         images={[
//           {
//             src: "nice-img.jpg",
//             alt: "Image 1",
//             heading: "Environmental Impact",
//           },
//           { src: "nice-img.jpg", alt: "Image 2", heading: "Earn Extra Income" },
//           {
//             src: "nice-img.jpg",
//             alt: "Image 3",
//             heading: "Diverse Selling options",
//           },
//         ]}
//       />
//       <br />
//       <Card cardData={shopkeepers} /> <Footer />
//     </>
//   );
// };

// export default App;














// import React, { useState, useEffect } from "react";
// import "./App.css";
// import Navbar from "./Components/Navbar.jsx";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Slider from "./Components/Slider.jsx";
// import Card from "./Components/Card.jsx";
// import Footer from "./Components/Footer.jsx";
// import { db } from "./Components/firebase.js"; // Assuming firebase is initialized in firebase.js
// import { collection, getDocs } from "firebase/firestore"; // Firebase Firestore functions

// const App = () => {
//   const[remove,setRemove] = useState(true);
//   const [shopkeepers, setShopkeepers] = useState([]); // All shopkeepers
//   const [filteredShopkeepers, setFilteredShopkeepers] = useState([]); // Filtered shopkeepers
//   const [searchTerm, setSearchTerm] = useState(""); // Search term

//   // Fetch shopkeepers data from Firestore on component mount
//   useEffect(() => {
//     if(searchTerm)
//       setRemove(false);
//     const fetchShopkeepers = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, "shopkeepers"));
//         const shopkeeperData = querySnapshot.docs.map((doc) => doc.data());
//         setShopkeepers(shopkeeperData); // Set the shopkeepers data to state
//         setFilteredShopkeepers(shopkeeperData); // Initialize filtered data
//       } catch (error) {
//         console.error("Error fetching shopkeepers:", error);
//       }
//     };

//     fetchShopkeepers();
//   }, []); // Empty dependency array ensures this runs once on mount

//   // Handle Search
//   const handleSearch = (e) => {
//     const term = e.target.value.toLowerCase();
//     setSearchTerm(term);
//     // setRemove(false);

//     // Filter shopkeepers based on search term
//     const filtered = shopkeepers.filter((shopkeeper) =>
//       shopkeeper.selectedScrapItems?.some((item) =>
//         item.toLowerCase().includes(term)
//       )
//     );
//     setFilteredShopkeepers(filtered);
//   };

//   return (
//     <>
//       <Navbar onSearch={handleSearch} /> {/* Pass search handler to Navbar */}
//       <Slider 
//         images={[
//           { src: "nice-img.jpg", alt: "Image 1", heading: "Environmental Impact" },
//           // { src: "nice-img.jpg", alt: "Image 2", heading: "Earn Extra Income" },
//           { src: "nice-img.jpg", alt: "Image 3", heading: "Diverse Selling options" },
//         ]}
//       />
//       <br />
//       <Card cardData={filteredShopkeepers} /> {/* Render filtered shopkeepers */}
//       <Footer />
//     </>
//   );
// };

// export default App;













import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "./Components/Slider.jsx";
import Card from "./Components/Card.jsx";
import Footer from "./Components/Footer.jsx";
import { db } from "./Components/firebase.js"; // Assuming firebase is initialized in firebase.js
import { collection, getDocs } from "firebase/firestore"; // Firebase Firestore functions

const App = () => {
  const [remove, setRemove] = useState(true);
  const [shopkeepers, setShopkeepers] = useState([]); // All shopkeepers
  const [filteredShopkeepers, setFilteredShopkeepers] = useState([]); // Filtered shopkeepers
  const [searchTerm, setSearchTerm] = useState(""); // Search term

  // Fetch shopkeepers data from Firestore on component mount
  useEffect(() => {
    if (searchTerm) setRemove(false);
    const fetchShopkeepers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "shopkeepers"));
        const shopkeeperData = querySnapshot.docs.map((doc) => doc.data());
        setShopkeepers(shopkeeperData); // Set the shopkeepers data to state
        setFilteredShopkeepers(shopkeeperData); // Initialize filtered data
      } catch (error) {
        console.error("Error fetching shopkeepers:", error);
      }
    };

    fetchShopkeepers();
  }, []); // Empty dependency array ensures this runs once on mount

  // Handle Search
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    // Filter shopkeepers based on search term
    const filtered = shopkeepers.filter((shopkeeper) =>
      shopkeeper.selectedScrapItems?.some((item) =>
        item.toLowerCase().includes(term)
      )
    );
    setFilteredShopkeepers(filtered);
  };

  return (
    <>
      <Navbar onSearch={handleSearch} /> {/* Pass search handler to Navbar */}
      
      {/* Show the Slider only if no filtered data exists */}
      {searchTerm ===""  && (
        <Slider
          images={[
            { src: "nice-img.jpg", alt: "Image 1", heading: "Environmental Impact" },
            { src: "nice-img.jpg", alt: "Image 2", heading: "Earn Extra Income" },
            { src: "nice-img.jpg", alt: "Image 3", heading: "Diverse Selling options" },
          ]}
        />
      )}

      <br />
      {/* Always display Cards, even if there's no data */}
      <Card cardData={searchTerm !== "" ? filteredShopkeepers : shopkeepers} />

      <Footer />
    </>
  );
};

export default App;
