import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface LocationState {
  ip: string;
  city: string;
  region: string;
  country: string;
  isp: string;
}

const initialState: LocationState = {
  ip: "",
  city: "",
  region: "",
  country: "",
  isp: "",
};

export const LocationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    SET_LOCATION: (state, action: PayloadAction<LocationState>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { SET_LOCATION } = LocationSlice.actions;
export const selectLocation = (state: RootState) => state.location;