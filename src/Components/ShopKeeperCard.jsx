const ShopkeeperCard = ({ name, address, phone, selectedScrapItems, itemPrices }) => {
  return (
    <div className="shopkeeper-card">
      <h3>{name}</h3>
      <p>Address: {address}</p>
      <p>Phone: {phone}</p>
      <div>
        <h4>Scrap Items:</h4>
        <ul>
          {selectedScrapItems.map((item, index) => (
            <li key={index}>
              {item}: {itemPrices[item]} USD
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShopkeeperCard;
