import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import TeamDetails from "./TeamDetails";
import userEvent from "@testing-library/user-event";

describe("<TeamDetails />", () => {
  it("should fetch the data and show the team details", async () => {
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

    expect(screen.getByText("Gianni Wehner")).toBeInTheDocument();
    expect(screen.getByText("Jaren Kerluke")).toBeInTheDocument();
    expect(screen.getByText("Marion Kertzmann")).toBeInTheDocument();
    expect(screen.getByText("Leader: Travon Nikolaus")).toBeInTheDocument();
  });
  it("should filter the members", async () => {
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

    userEvent.type(screen.getByLabelText(/search member here.../i), "Gianni");

    expect(screen.getAllByText(/gianni/i)).toHaveLength(1);
  });
});
