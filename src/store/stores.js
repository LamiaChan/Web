import { createContext } from "react";
import { UserStore } from "./UserStore";

export const stores = Object.freeze({
  userStore: new UserStore()
});

export const storesContext = createContext(stores);
export const StoresProvider = storesContext.Provider;