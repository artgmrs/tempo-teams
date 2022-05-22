import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import TeamType from "../../types/teamType";

export interface AppState {
  teams: TeamType[];
}

const initialState: AppState = {
  teams: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setTeams: (state, action: PayloadAction<TeamType[]>) => {
      state.teams = action.payload;
    },
  },
});

export const { setTeams } = appSlice.actions;

export default appSlice.reducer;
