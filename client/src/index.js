import React, { createContext } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import CarStore from "./store/CarStore";

import UserStore from "./store/UserStore";


const root = createRoot(document.getElementById("root"));

export const Context = createContext(null);
console.log(process.env.REACT_APP_API_URL);
root.render(
  <Context.Provider
    value={{
      user: new UserStore(),
      car: new CarStore(),
    }}
  >
    <App />
  </Context.Provider>,

  document.getElementById("root")
);


