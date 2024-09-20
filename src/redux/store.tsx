import { configureStore } from "@reduxjs/toolkit";
import locationModuleReducer from "./locationModuleSlice";
// ...

export const store = configureStore<any>({
  reducer: {
    locationModule: locationModuleReducer,
  },
});

export default store;
