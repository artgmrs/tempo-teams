import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import TeamType from "../../types/teamType";

export interface AppState {
    teams: TeamType[];
    currentTeam: TeamType | null;
}

const initialState: AppState = {
    teams: [],
    currentTeam: null,
};

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        updateTeams: (state, action: PayloadAction<TeamType[]>) => {
            state.teams = action.payload;
        },
        setCurrentTeam: (state, action: PayloadAction<TeamType>) => {
            state.currentTeam = action.payload;
        },
    },
});

export const { updateTeams, setCurrentTeam } = appSlice.actions;

export default appSlice.reducer;
