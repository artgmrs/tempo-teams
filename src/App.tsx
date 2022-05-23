import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoMatch from "routes/NoMatch/NoMatch";
import TeamDetails from "routes/TeamDetails/TeamDetails";
import TeamsOverview from "routes/TeamsOverview/TeamsOverview";
import { store } from "./shared/store/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TeamsOverview />} />
          <Route path="/teams/:id" element={<TeamDetails />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
