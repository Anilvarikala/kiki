import React, { useState, useEffect } from "react";
import { db, auth } from "./firebase";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import MultipleChoices from "./MultipleChoices";
import Navbar from "./Navbar";
import "../Components/ShopKeeper.css";

const ShopKeeper = ({ setCardData }) => {
  useEffect(() => {
    window.scrollBy(0, 0);
  });
  const [isEditing, setIsEditing] = useState(true);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedScrapItems, setSelectedScrapItems] = useState([]);
  const [itemPrices, setItemPrices] = useState({});

  const shopkeeperId = auth.currentUser ? auth.currentUser.uid : null;

  useEffect(() => {
    if (!shopkeeperId) return;

    const fetchShopkeeperData = async () => {
      try {
        const docRef = doc(db, "shopkeepers", shopkeeperId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setName(data.name || "");
          setAddress(data.address || "");
          setPhone(data.phone || "");
          setSelectedScrapItems(data.selectedScrapItems || []);
          setItemPrices(data.itemPrices || {});
          setIsEditing(false);
        } else {
          setIsEditing(true);
        }
      } catch (error) {
        console.error("Error fetching shopkeeper data:", error);
      }
    };

    fetchShopkeeperData();
  }, [shopkeeperId]);

  const handleSaveChanges = async () => {
    try {
      const shopkeeperData = {
        name,
        address,
        phone,
        selectedScrapItems,
        itemPrices,
      };

      await setDoc(doc(db, "shopkeepers", shopkeeperId), shopkeeperData);
      setIsEditing(false);

      const updatedCard = {
        id: shopkeeperId,
        image: "default-image.jpg",
        Items: selectedScrapItems.join(", "),
        name,
        place: address,
        number: phone,
        Timings: "9:00 AM - 6:00 PM",
        sources: Object.keys(itemPrices),
      };

      setCardData((prevCardData) => {
        const updatedData = prevCardData.map((card) =>
          card.id === shopkeeperId ? updatedCard : card
        );
        return updatedData;
      });

      alert("Changes saved successfully!");
    } catch (error) {
      console.error("Error saving shopkeeper data:", error);
      alert("Successfully changed");
    }
  };

  return (
    <>
      <Navbar />
      <div className="make-down">
        <div className="shopkeeper-container">
          <div className="profile-card shadow-lg p-4 rounded">
            {isEditing ? (
              <div className="profile-edit">
                <h3 className="mb-3 text-center">Edit Your Profile</h3>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="form-control mb-3"
                />
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your address"
                  className="form-control mb-3"
                />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                  className="form-control mb-3"
                />
                <MultipleChoices
                  isEditing={isEditing}
                  selectedItems={selectedScrapItems}
                  setSelectedItems={setSelectedScrapItems}
                  itemPrices={itemPrices}
                  setItemPrices={setItemPrices}
                />
                <button
                  className="btn btn-warning w-50 mt-3"
                  onClick={handleSaveChanges}
                >
                  Save Changes
                </button>
              </div>
            ) : (
              <div className="profile-view ">
                <h3 className="mb-3 text-center">Shopkeeper Profile</h3>

                <div className="d-flex" style={{ flexDirection: "column" }}>
                  <p>
                    <strong style={{ fontSize: 20 }}>Name:</strong> {name}
                  </p>
                  <p>
                    <strong style={{ fontSize: 20 }}>Address:</strong> {address}
                  </p>
                  <p>
                    <strong style={{ fontSize: 20 }}>Phone:</strong> {phone}
                  </p>{" "}
                </div>

                <MultipleChoices
                  isEditing={isEditing}
                  selectedItems={selectedScrapItems}
                  setSelectedItems={setSelectedScrapItems}
                  itemPrices={itemPrices}
                  setItemPrices={setItemPrices}
                />
                <br />
                <button
                  className="btn btn-warning w-50 mt-3"
                  onClick={() => setIsEditing(true)}
                >
                  Edit Profile
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopKeeper;
