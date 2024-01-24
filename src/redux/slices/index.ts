import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TypePhoto } from "components/Photos/Item/Item.types";

interface TypesInitialState {
  search: string;
  typeSearch: string;
  tooltip: boolean;
  photos: Array<TypePhoto>;
}

const initialState: TypesInitialState = {
  search: "",
  typeSearch: "photo",
  tooltip: false,
  photos: [],
};

const searchSlice = createSlice({
  name: "pexels",
  initialState,
  reducers: {
    hiddenTooltip: (state, actions: PayloadAction<boolean>) => {
      state.tooltip = actions.payload;
    },
    changeType: (state, actions: PayloadAction<string>) => {
      state.typeSearch = actions.payload;
    },
  },
  selectors: {
    getState: (state) => state,
  },
});

export const { hiddenTooltip, changeType } = searchSlice.actions;
export const { getState } = searchSlice.selectors;
export default searchSlice.reducer;
