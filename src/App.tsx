import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateTeams } from "./shared/store/slices/appSlice";
import { RootState } from "./shared/store/store";
import Card from "./components/Card/Card";
import CardContainer from "./components/CardContainer/CardContainer";

const App = () => {
    return <CardContainer />
};

export default App;
