import React, { createContext, useContext, useState } from "react";
export const CARD_CONTEXT = createContext();
const CardContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  return (
    <CARD_CONTEXT.Provider value={{ cart, setCart }}>
      {children}
    </CARD_CONTEXT.Provider>
  );
};
// customs hooks
export const useCart = () => useContext(CARD_CONTEXT);
export default CardContextProvider;
