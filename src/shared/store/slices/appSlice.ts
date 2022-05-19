import { createSlice, PayloadAction } from  "@reduxjs/toolkit"
import Team from "../../types/team"

export interface AppState {
  teams: Team[],
}

const initialState: AppState = {
  teams: [],
}

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    updateTeams: (state, action: PayloadAction<Team[]>) => {
      state.teams = action.payload;
    }
  },
});

export const { updateTeams } = appSlice.actions

export default appSlice.reducer