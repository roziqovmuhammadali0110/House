import { createContext, useState } from "react";
import { housesData } from "../data";

// Correct export syntax
export const HouseContext = createContext("HouseContext");

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Location (any)");
  return (
    <HouseContext.Provider value={console.log("this is context")}>
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
