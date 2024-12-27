
import React from "react";
import { BiFontSize } from "react-icons/bi";

const MultipleChoices = ({
  isEditing,
  selectedItems,
  setSelectedItems,
  itemPrices,
  setItemPrices,
}) => {
  const items = [
    "Plastic",
    "Wood",
    "Steel",
    "Iron",
    "Copper",
    "Glass",
    "Paper",
    "Rubber",
    "Aluminum",
    "Brass",
  ];

  const handleSelect = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(
        selectedItems.filter((selectedItem) => selectedItem !== item)
      );
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handlePriceChange = (item, price) => {
    setItemPrices({ ...itemPrices, [item]: price });
  };

  return (
    <div className="scrap-items row">
      <h4 style={{textAlign:"center"}}>Select Scrap Items</h4>
      
    <div  style={{ display: "grid",gridTemplateColumns: "repeat(4, 1fr)", gap: "20px",width:"90px",marginTop:"15px",alignItems:"center" }}>
        {items.map((item) => (
          <button
            key={item}
            onClick={() => isEditing && handleSelect(item)}
            style={{
              padding: "10px 20px",
              cursor: "pointer",
              backgroundColor: selectedItems.includes(item) ? "#4caf50" : "#f0f0f0",
              color: selectedItems.includes(item) ? "white" : "black",
              border: "1px solid #ccc",
              borderRadius: "5px",
              transition: "background-color 0.3s",
            }}
          >
            {item}
          </button>
        ))}
      </div>

      <h4 style={{ marginTop: "30px" }}>Selected Items with Prices</h4>
      {selectedItems.length > 0 ? (
        <table className="table table-striped table-bordered mt-3">
          <thead className="table-dark">
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Price (per kg)</th>
            </tr>
          </thead>
          <tbody>
            {selectedItems.map((item) => (
              <tr key={item}>
                <td>{item}</td>
                <td>
                  {isEditing ? (
                    <input
                      type="number"
                      placeholder="Enter price"
                      value={itemPrices[item] || ""}
                      onChange={(e) => handlePriceChange(item, e.target.value)}
                      style={{
                        width: "100%",
                        padding: "5px",
                        border: "1px solid #ccc",
                        borderRadius: "3px",
                      }}
                    />
                  ) : (
                    <span>{itemPrices[item]} /kg</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p style={{ marginTop: "20px", color: "#888" }}>No items selected.</p>
      )}
    </div>
  );
};

export default MultipleChoices;
