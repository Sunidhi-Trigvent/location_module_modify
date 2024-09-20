// export {};
import { createSlice } from "@reduxjs/toolkit";

export const locationModuleSlice = createSlice({
  name: "locationModule",

  // `createSlice` will infer the state type from the `initialState` argument
  initialState: {
    schedulingArray: [],
  },

  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    manageArray: (state: any, action: any) => ({
      schedulingArray: (state.value = action.payload),
    }),
  },
});

export const { manageArray } = locationModuleSlice.actions;
export default locationModuleSlice.reducer;
