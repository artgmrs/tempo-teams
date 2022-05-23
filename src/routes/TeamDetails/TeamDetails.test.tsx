import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import TeamDetails from "./TeamDetails";

describe("<TeamDetails />", () => {
  it("should show the team details", async () => {
    render(
      <MemoryRouter initialEntries={["/teams/1"]}>
        <Routes>
          <Route path="/teams/:id" element={<TeamDetails />} />
        </Routes>
      </MemoryRouter>,
    );

    // wait until data is retrieved from mock server
    await screen.findByText(/ordinary coral lynx/i);
    await screen.findByText(/travon/i);

    expect(screen.getByText("Gianni")).toBeInTheDocument();
    expect(screen.getByText("Jaren")).toBeInTheDocument();
    expect(screen.getByText("Marion")).toBeInTheDocument();
    expect(screen.getByText("Leader: Travon")).toBeInTheDocument();
  });
});
