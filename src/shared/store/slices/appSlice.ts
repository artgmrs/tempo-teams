import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import TeamType from "../../types/teamType";

export interface AppState {
  teams: TeamType[];
  currentTeam: TeamType | null;
  teamsFilterResult: TeamType[] | null;
}

const initialState: AppState = {
  teams: [],
  currentTeam: null,
  teamsFilterResult: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setTeams: (state, action: PayloadAction<TeamType[]>) => {
      state.teams = action.payload;
    },
    setCurrentTeam: (state, action: PayloadAction<TeamType>) => {
      state.currentTeam = action.payload;
    },
    setTeamsFilterResult: (state, action: PayloadAction<TeamType[] | null>) => {
      state.teamsFilterResult = action.payload;
    },
  },
});

export const { setTeams, setCurrentTeam, setTeamsFilterResult } = appSlice.actions;

export default appSlice.reducer;
