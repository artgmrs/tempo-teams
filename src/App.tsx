import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Team from "./routes/Team/Team";
import Teams from "./routes/Teams/Teams";
import { store } from "./shared/store/store";

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Teams />} />
                    <Route path="/team" element={<Team />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
