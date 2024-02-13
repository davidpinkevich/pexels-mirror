import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { photoService } from "services/PhotoService";
import { TypePhoto } from "components/Photos/Item/Item.types";

interface TypesInitialState {
  search: string;
  typeSearch: string;
  tooltip: boolean;
  loading: boolean;
  photos: Array<TypePhoto>;
}

const initialState: TypesInitialState = {
  search: "",
  typeSearch: "photo",
  tooltip: false,
  loading: false,
  photos: [],
};

export const fetchPhotos = createAsyncThunk(
  "pexels/fetchPhotos",
  async (page: number) => {
    return await photoService.getPhotos(page);
  }
);

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        state.loading = false;
        state.photos.push(...action.payload.photos);
      })
      .addCase(fetchPhotos.rejected, (state) => {
        state.loading = false;
      });
  },
  selectors: {
    getState: (state) => state,
    getAllPhotos: (state) => state.photos,
  },
});

export const { hiddenTooltip, changeType } = searchSlice.actions;
export const { getState, getAllPhotos } = searchSlice.selectors;
export default searchSlice.reducer;
