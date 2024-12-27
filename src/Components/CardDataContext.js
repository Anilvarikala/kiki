import React, { createContext, useState } from 'react';

 export const CardDataContext = createContext();

export const CardDataProvider = ({ children }) => {
  const [cardData, setCardData] = useState([
    
  ]);

  const addOrUpdateCard = (newCard) => {
    setCardData((prevData) => {
      const existingCardIndex = prevData.findIndex((card) => card.id === newCard.id);
      if (existingCardIndex !== -1) {
        // Update existing card
        const updatedData = [...prevData];
        updatedData[existingCardIndex] = { ...updatedData[existingCardIndex], ...newCard };
        return updatedData;
      } else {
        // Add new card
        return [...prevData, newCard];
      }
    });
  };

  return (
    <CardDataContext.Provider value={{ cardData, addOrUpdateCard }}>
      {children}
    </CardDataContext.Provider>
  );
};

