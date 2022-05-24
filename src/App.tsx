import Container from "@mui/material/Container";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import TeamDetails from "routes/TeamDetails/TeamDetails";
import TeamsOverview from "routes/TeamsOverview/TeamsOverview";
import { store } from "./shared/store/store";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Container maxWidth="lg">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TeamsOverview />} />
            <Route path="/teams/:id" element={<TeamDetails />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </Provider>
  );
};

export default App;
